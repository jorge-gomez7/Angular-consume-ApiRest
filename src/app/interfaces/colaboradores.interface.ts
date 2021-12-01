export interface colaboradores {
    ok: boolean;
    colaboradores: Colaboradores[];
}

interface Colaboradores {
    _id: string;
    nombres: string;
    nacimiento: string;
    estadoCivil: string;
    gradoAcademico: string;
    direccion: string;
    __v: number;
}