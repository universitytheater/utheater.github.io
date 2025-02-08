require 'yaml'
require 'fileutils'
require 'date'

show_info = YAML.load_file("../_data/show-info.yml")
show_timing_raw = YAML.load_file("../_data/shows.yml")

show_timing = show_timing_raw.map do |season, shows|
  shows.map.with_index do |st, i|
    quarter, year = st["quarter"].split(" ")
    [st["slug"], {
      "quarter" => quarter.downcase,
      "year" => year.to_i,
      "season" => season,
      "title" => st["title"],
      "date" => Date.new(year.to_i, 1, shows.length - i)
    }]
  end
end.flatten(1).to_h

show_info.each do |show|
  show["layout"] = "show-info"
  show.merge!(show_timing[show["slug"]])
  bp = "../_shows/#{show["year"]}/#{show["quarter"]}"
  FileUtils.mkpath(bp)
  File.write("#{bp}/#{show["slug"]}.md", show.to_yaml + "\n---\n")
end

