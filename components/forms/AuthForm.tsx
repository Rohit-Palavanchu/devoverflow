"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DefaultValues, FieldValues, Path, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Routes from "@/constant/routes";

interface AuthFormProps<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  formType: "SIGN_IN" | "SIGN_UP";
  onSubmit: (data: T) => Promise<{ success: boolean }>;
}

const AuthForm = <T extends FieldValues>({
  schema,
  defaultValues,
  formType,
  onSubmit,
}: AuthFormProps<T>) => {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit = async () => {
    console.log("Form submitted");
  };
    /*const hasErrors = Object.keys(form.formState.errors).length > 0;

  /*const buttonText =
    form.formState.isSubmitting && !hasErrors
      ? formType === "SIGN_IN"
        ? "Signing In..."
        : "Signing Up..."
      : formType === "SIGN_IN"
        ? "Sign In"
        : "Sign Up";*/

  const buttonText = formType === "SIGN_IN" ? "Sign In" : "Sign Up";

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="mt-7 space-y-5"
      >
        {Object.keys(defaultValues).map((i) => {
          return (
            <FormField
              key={i}
              control={form.control}
              name={i as Path<T>}
              render={({ field }) => (
                <FormItem className="flex w-full flex-col gap-2.5">
                  <FormLabel className="paragraph-medium text-dark300_light700">
                    {i === "email"
                      ? "Email Address"
                      : i[0].toUpperCase() + i.slice(1)}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type={i === "password" ? "password" : "text"}
                      {...field}
                      className="min-h-12 rounded-1.5 border light-border-2 background-light900_dark300 paragraph-regular text-dark300_light700 no-focus"
                    />
                  </FormControl>
                  <FormMessage className="text-[12px] font-bold text-red-600" />
                </FormItem>
              )}
            />
          );
        })}

        <Button
          disabled={form.formState.isSubmitting}
          className="w-full cursor-pointer rounded-2 px-5 py-6 font-inter paragraph-semibold !text-light-900 primary-gradient"
        >
          {form.formState.isSubmitted
            ? buttonText == "Sign In"
              ? "Signing In...."
              : "Signing Up...."
            : buttonText}
        </Button>
        {formType === "SIGN_IN" ? (
          <p>
            Don&apos;t have an account?{" "}
            <Link
              href={Routes.SIGN_UP}
              className="primary-text-gradient paragraph-semibold"
            >
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link
              href={Routes.SIGN_IN}
              className="primary-text-gradient paragraph-semibold"
            >
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
};

export default AuthForm;
