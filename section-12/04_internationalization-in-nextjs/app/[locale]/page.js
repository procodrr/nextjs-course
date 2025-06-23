// import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function Home() {
  // const t = useTranslations("HomePage"); // for non-async functions
  const t = await getTranslations("HomePage"); // for async functions

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-4 sm:p-20">
      <h1 className="text-xl font-bold">{t("title")}</h1>
      <p>{t("content")}</p>
    </div>
  );
}
