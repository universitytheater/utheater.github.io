require 'yaml'
require 'fileutils'

show_info = YAML.load_file("../_data/show-info.yml")
show_timing_raw = YAML.load_file("../_data/shows.yml")

show_timing = show_timing_raw.values.flatten.map do |st|
  quarter, year = st["quarter"].split(" ")
  [st["slug"], {
    "quarter" => quarter.downcase,
    "year" => year.to_i,
    "title" => st["title"]
  }]
end.to_h

show_info.each do |show|
  show["layout"] = "show-info"
  show.merge!(show_timing[show["slug"]])
  bp = "../_shows/#{show["year"]}/#{show["quarter"]}"
  FileUtils.mkpath(bp)
  File.write("#{bp}/#{show["slug"]}.md", show.to_yaml + "\n---\n")
end

