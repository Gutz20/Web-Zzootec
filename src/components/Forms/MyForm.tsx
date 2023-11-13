import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircularProgress } from "@mui/material";
import React from "react";
import { Children, ReactNode, cloneElement } from "react";
import {
  DefaultValues,
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import z from "zod";

interface Props<T extends FieldValues> {
  zodSchema: z.Schema;
  onSubmit: SubmitHandler<T>;
  onError: (data: FieldValues) => void;
  children: ReactNode;
  defaultValues?: DefaultValues<FieldValues>;
}

const MyForm = <T extends FieldValues>({
  defaultValues,
  zodSchema,
  onSubmit,
  onError,
  children,
}: Props<T>) => {
  type EntityType = z.infer<typeof zodSchema>;
  const methods = useForm<EntityType>({
    resolver: zodResolver(zodSchema),
    defaultValues,
  });

  if (methods.formState.isLoading)
    return (
      <div className="h-20 flex items-center justify-center">
        <CircularProgress />
      </div>
    );

  const renderChildren = () => {
    return Children.map(children, (child: React.ReactNode) => {
      if (!child || !React.isValidElement(child)) {
        return child;
      }

      let props = {};

      if (
        child.type &&
        typeof child.type !== "string" &&
        "name" in child.type
      ) {
        props = {
          getValues: methods.getValues,
          onSubmit,
          reset: methods.reset,
        };
      }

      return cloneElement(child as React.ReactElement, props);
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(
          async (data, _) => {
            const syntheticEvent = {
              target: { reset: methods.reset },
            } as React.BaseSyntheticEvent;
            await onSubmit(data, syntheticEvent);
          },
          (errors) => {
            console.log({ data: methods.getValues });
            onError(errors);
          }
        )}
      >
        {renderChildren()}
      </form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

export default MyForm;
