import {
	inputContainerCss,
	inputItemCss,
	inputLabelCss
} from 'src/components/widget/components/PaymentProcess/Frequency/styles';
import {
	fieldSetCss,
	legendCss
} from 'src/components/widget/components/PaymentProcess/styles';
import {useConfigContext} from 'src/components/widget/hooks/useConfigContext';
import {useWidgetContext} from 'src/components/widget/hooks/useWidgetContext';
import {DonationFrequency} from 'src/components/widget/types/DonationFrequency';
import {PaymentMethod} from 'src/components/widget/types/PaymentMethod';

export const Frequency = () => {
	const {primaryColor} = useConfigContext();
	const {frequency, selectedPaymentMethod, setFrequency} = useWidgetContext();

	if (selectedPaymentMethod === PaymentMethod.VENMO) {
		return (
			<fieldset className={fieldSetCss}>
				<legend className={legendCss}>Frequency</legend>
				<p>Venmo only supports one-time donations</p>
			</fieldset>
		);
	}

	return (
		<fieldset className={fieldSetCss}>
			<legend className={legendCss}>Frequency</legend>
			<div className={inputContainerCss(primaryColor)}>
				<div className={inputItemCss(primaryColor)}>
					<input
						type="radio"
						name="frequency"
						id="monthly"
						checked={frequency === DonationFrequency.Monthly}
						value={DonationFrequency.Monthly}
					/>
					<label
						className={inputLabelCss(primaryColor)}
						id="frequency-monthly"
						htmlFor="monthly"
						onClick={() => {
							setFrequency(DonationFrequency.Monthly);
						}}
					>
						Give Monthly
					</label>
				</div>
				<div className={inputItemCss(primaryColor)}>
					<input
						type="radio"
						name="frequency"
						id="once"
						checked={frequency === DonationFrequency.OneTime}
						value={DonationFrequency.OneTime}
					/>
					<label
						id="frequency-one-time"
						htmlFor="one-time"
						className={inputLabelCss(primaryColor)}
						onClick={() => {
							setFrequency(DonationFrequency.OneTime);
						}}
					>
						Once
					</label>
				</div>
			</div>
		</fieldset>
	);
};
