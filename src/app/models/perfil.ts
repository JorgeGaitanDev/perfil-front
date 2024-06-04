export class Perfil {
    _id?: number;
    nombres: string;
    apellidos: string;
    correo_institucional: string;
    correo_personal: string;
    whatsApp: number;
    pais: string;

    constructor(nombres: string, apellidos: string, correo_institucional: string, correo_personal: string, whatsApp: number, pais: string) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.correo_institucional = correo_institucional;
        this.correo_personal = correo_personal;
        this.whatsApp = whatsApp;
        this.pais = pais;
    }
}
