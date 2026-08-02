"use client";

import type { FormEvent } from "react";

import type {
  FormFieldDefinition,
  FormFieldOption,
} from "@/types/content";

type ContactFieldBase = Omit<FormFieldDefinition, "options" | "type"> & {
  readonly autoComplete?: string;
};

export type ContactFormField =
  | (ContactFieldBase & {
      readonly type: "select";
      readonly options: readonly FormFieldOption[];
    })
  | (ContactFieldBase & {
      readonly type: "email" | "tel" | "text" | "textarea";
      readonly options?: never;
    });

export type ContactFormProps = {
  readonly fields: readonly ContactFormField[];
  readonly submitLabel: string;
  readonly formLabel?: string;
};

const fieldStyles =
  "type-body min-h-11 w-full rounded-md border border-border bg-surface px-3 py-2.5 text-text-primary shadow-subtle transition-colors duration-200 placeholder:text-text-muted hover:border-primary";

export function ContactForm({
  fields,
  submitLabel,
  formLabel,
}: ContactFormProps) {
  function preventUnconnectedSubmission(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <form
      method="dialog"
      aria-label={formLabel}
      onSubmit={preventUnconnectedSubmission}
      className="grid min-w-0 gap-5 md:grid-cols-2 md:gap-6"
    >
      {fields.map((field) => (
        <div
          key={field.id}
          className={`min-w-0 ${field.type === "textarea" ? "md:col-span-2" : ""}`}
        >
          <label
            htmlFor={field.id}
            className="type-body-small block font-semibold text-text-primary"
          >
            {field.label}
            {field.required ? (
              <>
                <span aria-hidden="true" className="text-warning">
                  {" "}*
                </span>
                <span className="sr-only"> (required)</span>
              </>
            ) : null}
          </label>

          {field.type === "select" ? (
            <select
              id={field.id}
              name={field.name}
              required={field.required}
              autoComplete={field.autoComplete}
              defaultValue=""
              className={`${fieldStyles} mt-2`}
            >
              <option value="" disabled>
                {field.label}
              </option>
              {field.options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === "textarea" ? (
            <textarea
              id={field.id}
              name={field.name}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              rows={6}
              className={`${fieldStyles} mt-2 min-h-32 resize-y`}
            />
          ) : (
            <input
              id={field.id}
              name={field.name}
              type={field.type}
              required={field.required}
              autoComplete={field.autoComplete}
              placeholder={field.placeholder}
              className={`${fieldStyles} mt-2`}
            />
          )}
        </div>
      ))}

      <div className="md:col-span-2">
        <button
          type="submit"
          className="type-button inline-flex min-h-11 items-center justify-center rounded-md !bg-primary !px-5 !py-2.5 text-center text-primary-foreground transition-colors duration-200 hover:!bg-primary-hover"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
