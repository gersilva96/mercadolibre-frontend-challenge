import { keys } from "lodash-es";
import { useTranslation } from "react-i18next";
import { tk } from "translations/i18n";
import { FC } from "types/react";
import { getClassName } from "utils/components";
import { PaymentItem } from "./PaymentItem/PaymentItem";
import classes from "./Payments.module.scss";

export interface PaymentsProps {
  className?: string;
}

const tkPayments = tk.page.home.component.payments;

type Payment = keyof typeof tkPayments.payments;

export const Payments: FC<PaymentsProps> = ({ className }) => {
  const { t } = useTranslation();
  const getPaymentImgSrc = (name: string) => `/payments/${name}.svg`;
  const keyArray = keys(tkPayments.payments) as Payment[];
  return (
    <div className={getClassName(classes.container, className)}>
      {keyArray.map((name) => (
        <PaymentItem
          key={name}
          altText={t(tkPayments.payments[name])}
          className={classes[name]}
          imgSrc={getPaymentImgSrc(name)}
          text={t(tkPayments.payments[name])}
        />
      ))}
    </div>
  );
};
