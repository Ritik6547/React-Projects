import FormGroup from "./FormGroup";
import { useTransactionContext } from "../context/useTransactionContext";
import { useId, useState } from "react";

const TransactionForm = () => {
  const { setTransactions } = useTransactionContext();
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
  });
  const [errors, setErrors] = useState({});
  const id = useId();

  const validationConfig = {
    description: [
      { required: true, message: "Please enter description" },
      {
        minLength: 2,
        message: "Description must be at least 2 characters long",
      },
    ],
    amount: [
      { required: true, message: "Please enter an amount" },
      { pattern: /^[-+]?(?:\d+|\d*\.\d+)$/, message: "Enter a valid number" },
    ],
  };

  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value.trim()) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minLength && value.length < rule.minLength) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = validate(formData);
    if (Object.entries(result).length) {
      return;
    }

    setTransactions((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        desc: formData.description.trim(),
        amount: formData.amount.trim(),
      },
    ]);

    setFormData({
      description: "",
      amount: "",
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const rules = validationConfig[name];
    let errorMsg = "";
    for (const rule of rules) {
      if (rule.required && !value.trim()) {
        errorMsg = rule.message;
        break;
      }
      if (rule.minLength && value.length < rule.minLength) {
        errorMsg = rule.message;
        break;
      }
      if (rule.pattern && !rule.pattern.test(value)) {
        errorMsg = rule.message;
        break;
      }
    }

    setErrors((prev) => ({
      ...prev,
      [name]: errorMsg,
    }));
  };

  const isSubmitDisabled = () => {
    return (
      !formData.description.trim() ||
      !formData.amount.trim() ||
      Object.values(errors).some((e) => e)
    );
  };

  return (
    <div className="form-section">
      <h3>Add Transaction</h3>

      <form onSubmit={handleSubmit}>
        <FormGroup
          id={`${id}-description`}
          label="Description"
          placeholder="Enter description..."
          value={formData.description}
          error={errors.description}
          onChange={handleChange}
          name="description"
        />
        <FormGroup
          id={`${id}-amount`}
          label="Amount"
          placeholder="Enter amount..."
          value={formData.amount}
          error={errors.amount}
          onChange={handleChange}
          name="amount"
        />
        <p className="warn">Use negative (-) for expenses</p>

        <button
          className="add-transaction-btn"
          type="submit"
          disabled={isSubmitDisabled()}>
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
