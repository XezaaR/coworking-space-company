var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export function submitForm(event) {
    return __awaiter(this, void 0, void 0, function* () {
        event.preventDefault();
        const form = event.target;
        const emailInput = form.querySelector('input[type="email"]');
        const data = {
            email: emailInput.value,
            name: "defaultName" // Используем значение по умолчанию
        };
        console.log('Submitting form with data:', data);
        try {
            const response = yield fetch('https://coworker-se8z.onrender.com/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                const errorText = yield response.text();
                throw new Error(`Error: ${response.statusText} - ${errorText}`);
            }
            const result = yield response.json();
            console.log('Form submitted successfully:', result);
        }
        catch (error) {
            console.error('Error submitting form:', error);
        }
    });
}
