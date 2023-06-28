<button @onclick="IncrementCount">Click me</button>
<p>Current count: @currentCount</p>

@code {
    private int currentCount = 0;

    private void IncrementCount()
    {
        currentCount++;
    }
}
