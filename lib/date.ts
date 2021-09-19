import dayjs from "dayjs";

import { config } from "@config/config";

export const formatDate = (date: Date): string =>
  dayjs(date).format(config.dateFormat);
