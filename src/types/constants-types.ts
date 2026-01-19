interface I_tag {
  id: number;
  title: string;
  color: string;
  priority: string;
}

interface I_filter {
  id: number;
  title: string;
}

export type T_tags = I_tag[];
export type T_filters = I_filter[];
