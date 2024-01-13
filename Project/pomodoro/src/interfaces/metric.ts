import { Icons } from "../enums/Icons";

export interface Metric {
    id: string;
    title: string;
    stat?: string;
    defaultValue: string;
    icon: Icons;
    metricStyleClass?: string;
    iconStyleClass?: string;
  }