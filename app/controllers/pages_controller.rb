class PagesController < ApplicationController
  def home
    @year = Date.today.year
  end
end
