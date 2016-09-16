defmodule EmailScraper do
    def main(url) do
        validate_url(url)
        get_page(url) |> find_emails |> List.flatten |> Enum.uniq |> pretty_print
    end

    def get_page(link) do 
        response = HTTPoison.get! link
        response.body
    end

    def find_emails(body) do
        Regex.scan(~r<(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])>, body)
    end

    def pretty_print(list) do
        Enum.each(list, fn(x) -> IO.puts(x) end)
    end

    def validate_url(url) do
        case length(url) do 
            0 -> IO.puts("Please provide a valid http address")
        end
    end
end
