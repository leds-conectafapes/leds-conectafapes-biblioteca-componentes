export const inputClass =
  "p-4 text-base font-regular font-inter leading-normal bg-white text-gray-600 rounded-lg border border-gray-500 hover:border-gray-700 focus:border-primary-500 focus:ring-2 focus:ring-blue-600/50 outline-none";

export const inputStateStyles = {
  default: "",
  error:
    "hover:border-red-900 border-red-800 bg-red-50 focus:border-red-800 focus:ring-red-200",
  warning:
    "hover:border-orange-900 border-orange-700 bg-orange-50 focus:border-orange-700 focus:ring-orange-200",
  disabled: "border-gray-200 bg-gray-200 hover:border-gray-200",
} as const;
