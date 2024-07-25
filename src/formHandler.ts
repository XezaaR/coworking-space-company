export async function submitForm(event: Event): Promise<void> {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;

    const data = {
        email: emailInput.value,
        name: "defaultName"  // Используем значение по умолчанию
    };

    console.log('Submitting form with data:', data);

    try {
        const response = await fetch('https://coworker-se8z.onrender.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Error: ${response.statusText} - ${errorText}`);
        }

        const result = await response.json();
        console.log('Form submitted successfully:', result);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}
