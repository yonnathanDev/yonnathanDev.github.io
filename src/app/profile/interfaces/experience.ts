
export interface Resume {
    resumen?: string;
}

export interface Experience {
    empresa:      string;
    fechaInicio:  string;
    fechaTermino: string;
    ubicacion:    string;
    cargo:        string;
    descripcion:  Descripcion[];
    tecnologia:   Tecnologia[];
}

export interface Descripcion {
    parrafo: string;
}

export interface Tecnologia {
    detalle: string;
}

export interface Studies {
    nombre?: string;
    fecha?: string;
    diudad?: string;
    detalle?: string;
}

export interface Contact {
    nombre?: string;
    rut: string;
    fechaNacimiento: string;
    direccion: string;
    telefono: string;
    email: string;
}

export interface Social {
    nombre?: string;
    detalle?: string;
    icon?: string;
}

export interface Skill {
    nombre?: string;
    icon?: string;
}