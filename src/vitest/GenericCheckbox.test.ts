import { render, fireEvent } from "@testing-library/vue";
import { describe, it, expect, vi } from "vitest";
import { ref } from "vue";

import GenericCheckbox from "../components/GenericCheckbox/GenericCheckbox.vue";
import GenericButton from "../components/GenericButton/GenericButton.vue";

describe("GenericCheckbox", () => {
  describe("testes de comportamento", () => {
    it("vincula corretamente o valor com v-model", async () => {
      const modelValue = ref<boolean | undefined>(undefined);

      const { getByLabelText } = render(GenericCheckbox, {
        props: {
          label: "Checkbox",
          modelValue: modelValue.value,
          "onUpdate:modelValue": (val: boolean | undefined) => {
            modelValue.value = val;
          },
        },
      });

      const checkbox = getByLabelText("Checkbox") as HTMLInputElement;
      expect(modelValue.value).toBe(undefined);
      expect(checkbox).not.toBeChecked();

      await fireEvent.click(checkbox);
      expect(modelValue.value).toBe(true);
      expect(checkbox).toBeChecked();

      await fireEvent.click(checkbox);
      expect(modelValue.value).toBe(false);
      expect(checkbox).not.toBeChecked();
    });

    it("envio de formulário", async () => {
      const onSubmit = vi.fn();
      const { getByLabelText, getByText } = render({
        components: { GenericCheckbox, GenericButton },
        template: `
            <form @submit="submitForm">
                <GenericCheckbox v-model="checkboxModel" label="Checkbox" />
                <GenericButton label="Enviar" type="submit" />
            </form>
            `,
        setup() {
          const checkboxModel = ref();
          const submitForm = () => {
            onSubmit(checkboxModel.value);
          };
          return { checkboxModel, submitForm };
        },
      });

      const checkbox = getByLabelText("Checkbox") as HTMLInputElement;
      const button = getByText("Enviar");

      await fireEvent.click(checkbox);
      fireEvent.click(button);
      expect(onSubmit).toHaveBeenCalledWith(true);

      await fireEvent.click(checkbox);
      fireEvent.click(button);
      expect(onSubmit).toHaveBeenCalledWith(false);
    });
  });
});
