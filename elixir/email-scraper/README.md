# EmailScraper

The name of this project describes it pretty well. It is a mail scraper that
will receive an URL to a web page and scrape that page for any email addresses
that will be outputed to a file. It does not however do any traversing of the
page.

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Add email_scraper to your list of dependencies in `mix.exs`:

        def deps do
          [{:email_scraper, "~> 0.0.1"}]
        end

  2. Ensure email_scraper is started before your application:

        def application do
          [applications: [:email_scraper]]
        end

