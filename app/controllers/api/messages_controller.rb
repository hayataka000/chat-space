class Api::MessagesController < ApplicationController
  def index
    respond_to do |format|
      # binding.pry/
      @group = Group.find(params[:group_id])
      format.html
      format.json { @messages = @group.messages.where('id > ?', params[:id])}
    end
  end
end
