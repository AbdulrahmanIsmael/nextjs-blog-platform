export function setTagSize(priority: string) {
  switch (priority) {
    case "highest":
      return "p-6 text-4xl font-bold";
      break;
    case "high":
      return "p-5 text-3xl font-bold";
      break;
    case "medium":
      return "p-4 text-2xl font-semibold";
      break;
    case "low":
      return "p-3 text-xl font-semibold";
      break;
    case "lowest":
      return "p-3 text-lg font-semibold";
      break;
  }
}
