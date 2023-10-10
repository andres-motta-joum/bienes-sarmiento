import { Timestamp } from "@angular/fire/firestore";

export interface Operacion {
    valor: number,
    responsable: string,
    fecha: Timestamp,
    concepto: string,
}
