import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { Video } from './Video';
import VideoSchema from './VideoSchema';

@InputType()
class VideoInput {
    @Field()
    description: String;
    @Field()
    title: String;
    @Field()
    category: String;
}

@Resolver()
class VideoResolver {
    @Mutation(() => Video)
    addVideo(@Arg('videoInput') videoInput: VideoInput) {
        return VideoSchema.create(videoInput);
    }

    @Query(() => [Video])
    async videos() {
        return VideoSchema.find();
    }
}

export { VideoResolver }
