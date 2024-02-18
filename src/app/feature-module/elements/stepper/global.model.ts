export interface Localization{
    ar: string
    en: string,
}

export interface BaseEntity{
    id:number
    name:Localization
}

export interface Curriculum{
    id: number,
    name:Localization,
}

export interface Grade{
    id: number,
    name:Localization,
}

export interface Track{
    id: number,
    name:Localization,
}
export interface Curriculum{
    id: number,
    name:Localization,
}

export interface Division{
    id: number,
    name:Localization,
}


export interface OptionalSubjects{
    id: number,
    name:Localization,
}

export interface GenericResponse<T>{
  result?:T
  data: T
  total:number
  totalAllData:number
  statusCode:string

}

// interface result<T>{
//     data:T,
//     total:number
//     totalAllData:number
// }

export interface Division{
  id: number,
  name:Localization,
  hasTrack?: boolean
  isAcceptStudent?:boolean

}


export type Mode = 'edit'| 'view'