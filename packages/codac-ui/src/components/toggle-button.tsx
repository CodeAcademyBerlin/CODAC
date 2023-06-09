"use client";

export function ToggleButton({
  label,
  checked,
  toggle,
}: {
  label?: string;
  checked: boolean;
  toggle: () => void;
}) {
  return (
    <label className="relative mr-5 inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        onChange={toggle}
        value=""
        className="peer sr-only"
        checked={checked}
      />
      <div className="dark:peer-focus:ring-gray-500-800 peer-checked:bg-secondary peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-4 peer-focus:ring-red-300 dark:border-gray-600 dark:bg-gray-700"></div>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  );
}
