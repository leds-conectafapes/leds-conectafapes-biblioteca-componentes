import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/vue";
import { ref } from "vue";

import GenericRadioGroup from "../components/GenericRadioGroup/GenericRadioGroup.vue";
import GenericButton from "../components/GenericButton/GenericButton.vue";

describe("GenericRadioGroup.vue", () => {
  describe("testes de comportamento", () => {
    it("vincula corretamente o valor com v-model", async () => {
      const modelValue = ref<string | undefined>();

      const { getByDisplayValue } = render(GenericRadioGroup, {
        props: {
          label: "Fruta",
          options: [
            { text: "banana", value: "banana" },
            { text: "maçã", value: "maçã" },
            { text: "uva", value: "uva" },
          ],
          modelValue: modelValue.value,
          "onUpdate:modelValue": (val: string | undefined) => {
            modelValue.value = val;
          },
        },
      });

      const radioBanana = getByDisplayValue("banana");
      await fireEvent.click(radioBanana);
      expect(radioBanana).toBeChecked();
      expect(modelValue.value).toBe("banana");

      const radioUva = getByDisplayValue("uva");
      await fireEvent.click(radioUva);
      expect(radioUva).toBeChecked();
      expect(modelValue.value).toBe("uva");
    });

    it("envio de formulário", async () => {
      const onSubmit = vi.fn();
      const { getByDisplayValue, getByText } = render({
        components: { GenericRadioGroup, GenericButton },
        template: `
          <form @submit="submitForm">
            <GenericRadioGroup v-model="inputModel" label="Input" :options="[{text: 'banana', value: 'banana'}, {text: 'maçã', value: 'maçã'}, {text: 'uva', value: 'uva'}]" />
            <GenericButton label="Enviar" type="submit" />
          </form>
        `,
        setup() {
          const inputModel = ref();
          const submitForm = () => {
            onSubmit(inputModel.value);
          };
          return { inputModel, submitForm };
        },
      });
      const radio = getByDisplayValue("banana");
      const button = getByText("Enviar");
      await fireEvent.click(radio);
      await fireEvent.click(button);
      expect(onSubmit).toHaveBeenCalledWith("banana");
    });
  });
});
