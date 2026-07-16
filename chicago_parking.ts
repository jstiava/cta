export type PermitStatus = "Both" | "Left" | "Right" | "None";

export interface ChicagoRoadFeatureProperties {
  OBJECTID: number;
  FNODE_ID: number;
  TNODE_ID: number;
  TRANS_ID: number;

  PRE_DIR: string | null;
  STREET_NAM: string;
  STREET_TYP: string;
  SUF_DIR: string | null;

  STREETNAME: number;

  L_F_ADD: number;
  L_T_ADD: number;
  R_F_ADD: number;
  R_T_ADD: number;

  LOGICLF: number;
  LOGICLT: number;
  LOGICRF: number;
  LOGICRT: number;

  CLASS: number;
  STATUS: string;
  STATUS_DAT: string;

  TIERED: string;

  ONEWAY_DIR: string | null;
  DIR_TRAVEL: string;

  EWNS: number;
  EWNS_DIR: string;

  L_PARITY: string;
  R_PARITY: string;

  F_ZLEV: number;
  T_ZLEV: number;

  L_FIPS: number;
  R_FIPS: number;

  L_ZIP: string;
  R_ZIP: string;

  L_CENSUSBL: string;
  R_CENSUSBL: string;

  F_CROSS: string;
  F_CROSS_ST: number;

  T_CROSS: string;
  T_CROSS_ST: number;

  LENGTH: number;
  Shape_Leng: number;

  EDIT_DATE: number;
  EDIT_TYPE: string | null;
  FLAG_STRIN: string | null;

  CREATE_USE: string;
  CREATE_TIM: string;

  UPDATE_USE: string;
  UPDATE_TIM: string;

  street_key: string;

  left_permits: boolean;
  right_permits: boolean;
  permit_status: PermitStatus;

  is_paid: boolean;
}