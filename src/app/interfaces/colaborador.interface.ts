export interface colaborador {
    ok: boolean;
    colaborador: Colaborador[];
}

interface Colaborador {
    _id: string;
    nombres: string;
    nacimiento: string;
    estadoCivil: string;
    gradoAcademico: string;
    direccion: string;
    __v: number;
}