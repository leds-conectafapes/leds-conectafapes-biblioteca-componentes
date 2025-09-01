import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";

import GenericFlag from "../components/GenericSnackBar/GenericSnackBar.vue";

import type { flagVariant } from "../types";

const flagVariants: flagVariant[] = [
  "informative",
  "success",
  "warning",
  "error",
];
const activeValues = [true, false];

const flagIconMap: Record<flagVariant, string> = {
  informative: "info",
  success: "check_circle",
  warning: "warning",
  error: "report",
};

const flagStyleMap: Record<
  flagVariant,
  {
    card_border: string;
    card_bg: string;
    icon: string;
    title: string;
    description: string;
  }
> = {
  informative: {
    card_border: "border-slate-200",
    card_bg: "bg-white",
    icon: "text-gray-500",
    title: "text-gray-900",
    description: "text-gray-600",
  },
  success: {
    card_border: "border-slate-200",
    card_bg: "bg-white",
    icon: "text-emerald-500",
    title: "text-gray-900",
    description: "text-gray-600",
  },
  warning: {
    card_border: "border-transparent",
    card_bg: "bg-amber-300",
    icon: "text-zinc-900",
    title: "text-zinc-900",
    description: "text-zinc-900",
  },
  error: {
    card_border: "border-transparent",
    card_bg: "bg-red-700",
    icon: "text-zinc-50",
    title: "text-zinc-50",
    description: "text-zinc-50",
  },
};

describe("GenericFlag.vue", () => {
  describe("testes de estilização", () => {
    // Teste de estilização para cada combinação de variant
    it.each(
      flagVariants.flatMap((variant) =>
        activeValues.map(
          (active) => [variant, active] as [flagVariant, boolean],
        ),
      ),
    )('estilização correta com variant "%s" e active %s', (variant, active) => {
      const { getAllByRole } = render(GenericFlag, {
        props: {
          variant,
          title: `Snackbar Title - ${variant} ${active}`,
          description: `Snackbar Description - ${variant} ${active}`,
          modelValue: active,
        },
      });

      const snackbar = getAllByRole("generic")[1];
      const icon = snackbar.childNodes[0];
      const title = snackbar.childNodes[1].childNodes[0];
      const description = snackbar.childNodes[1].childNodes[1];
      const close = snackbar.childNodes[2];

      // Verifica se o modelValue esconde o snackbar
      if (!active) {
        expect(snackbar).toHaveClass("hidden");
      }

      // Verifica a aplicação do ícone
      expect(icon).toHaveTextContent(`${flagIconMap[variant]}`);

      // Verifica a aplicação da cor do ícone
      expect(icon).toHaveClass(`${flagStyleMap[variant].icon}`);

      // Verifica a aplicação do texto do título
      expect(title).toHaveTextContent(`Snackbar Title - ${variant} ${active}`);

      // Verifica a aplicação da cor do título
      expect(title).toHaveClass(`${flagStyleMap[variant].title}`);

      // Verifica a aplicação do texto da descrição
      expect(description).toHaveTextContent(
        `Snackbar Description - ${variant} ${active}`,
      );

      // Verifica a aplicação da cor da descrição
      expect(description).toHaveClass(`${flagStyleMap[variant].description}`);

      // Verifica a aplicação da cor do título no botão de fechar
      expect(close).toHaveClass(`${flagStyleMap[variant].title}`);
    });
  });

  describe("testes de comportamento", () => {
    // Teste para o fechamento automático do snackbar
    it.each(flagVariants)(
      'fechamento automático com variant "%s"',
      (variant) => {
        const { getAllByRole } = render(GenericFlag, {
          props: {
            variant,
            title: `Snackbar Title - ${variant}`,
            modelValue: true,
          },
        });

        const snackbar = getAllByRole("generic")[1];

        expect(snackbar).not.toHaveClass("hidden");

        setTimeout(() => {
          if (variant === "informative" || variant === "success") {
            expect(snackbar).toHaveClass("hidden");
          } else {
            expect(snackbar).not.toHaveClass("hidden");
          }
        }, 8000);
      },
    );
  });
});
