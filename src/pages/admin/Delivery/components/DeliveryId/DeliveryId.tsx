import { FormSchemaDelivery, formDeliverySchema } from "@/types";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const DeliveryId = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormSchemaDelivery>({
    resolver: zodResolver(formDeliverySchema),
    mode: "onChange",
  });
  const { deliveryId } = useParams();

  useEffect(() => {}, [deliveryId]);

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Usuario"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Seleccionar..."
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Descripcion"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Id Pedido"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Ubicación"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Fecha"
          />
        </div>
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default DeliveryId;
