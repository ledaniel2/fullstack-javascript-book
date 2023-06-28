@inject IJSRuntime JSRuntime

<button @onclick="ShowAlert">Show Alert</button>

@code {
    private async Task ShowAlert()
    {
        await JSRuntime.InvokeVoidAsync("showAlert", "Hello from Blazor");
    }
}
