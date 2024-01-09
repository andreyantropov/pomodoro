import { Icons } from "../enums/Icons";

export interface Metric {
    id: string;
    title: string;
    stat: number;
    icon: Icons;
    unit?: string;
    metricStyleClass?: string;
    iconStyleClass?: string;
  }