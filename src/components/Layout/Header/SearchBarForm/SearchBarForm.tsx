import { isString } from "lodash-es";
import { useRouter } from "next/router";
import { Form } from "components/generic/Form";
import { FC } from "types/react";
import { getItemsUrl } from "utils/pages";
import { SearchBarFormValues } from "./searchBarFormConfig";
import { SearchBarFormContent } from "./SearchBarFormContent/SearchBarFormContent";

export interface SearchBarFormProps {
  className?: string;
}

export const SearchBarForm: FC<SearchBarFormProps> = ({ className }) => {
  const router = useRouter();
  const { q } = router.query;
  return (
    <Form<SearchBarFormValues>
      className={className}
      defaultValues={{ q: isString(q) ? q : "" }}
      cleanOnSubmit={false}
      onSubmit={async (formData) => {
        if (formData.q !== undefined && formData.q !== "") {
          router.push(getItemsUrl({ q: formData.q }));
        }
      }}
    >
      <SearchBarFormContent />
    </Form>
  );
};
