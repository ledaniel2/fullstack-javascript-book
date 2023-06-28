@page "/greeting/{name}"

<h1>Hello, @Name!</h1>

@code {
    [Parameter]
    public string Name { get; set; }
}
