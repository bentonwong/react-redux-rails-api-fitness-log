class PostSerializer < ActiveModel::Serializer
  attributes :id, :date, :context, :food, :workout, :weight
end
