import React from "react";
import WmCarouselTemplate from "@wavemaker/app-rn-runtime/components/advanced/carousel/carousel-template/carousel-template.component";
import WmPicture from "@wavemaker/app-rn-runtime/components/basic/picture/picture.component";

export const DynamicTemplate = React.memo(
    ({ $item, $index, carousel, fragment }) => {
      const item = $item;
      const [currentItemWidgets] = React.useState({});
      carousel.itemWidgets = carousel.itemWidgets || [];
      carousel.itemWidgets[$index] = currentItemWidgets;
      const [listener] = React.useState({
        onComponentInit: c => {
          currentItemWidgets[c.name] = c;
        //   fragment.onComponentInit(c);
        },
        onComponentDestroy: c => {
        //   fragment.onComponentDestroy(c);
          delete currentItemWidgets[c.name];
        },
      });
    //   const { watch } = useWatcher(fragment.watcher);
      return (
        <WmCarouselTemplate
          name="carousel_template1"
          id={'carousel_item_' + $index + '_carousel_template1'}
          styles={{
            root: {
              textAlign: 'center',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
            },
            text: { textAlign: 'center' },
          }}
          listener={listener}>
          <WmPicture
            name="picture4"
            picturesource={$item.image}
            id={'repeat_item_' + $index + '_picture4'}
            pictureplaceholder="resources/images/imagelists/default-image.png"
            styles={{ root: { width: '100%',height:400 }, text: {} }}
            listener={listener}></WmPicture>
        </WmCarouselTemplate>
      );
    }
  );