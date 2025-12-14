import React from 'react';
import WmListTemplate from '@wavemaker/app-rn-runtime/components/data/list/list-template/list-template.component';
import WmLabel from '@wavemaker/app-rn-runtime/components/basic/label/label.component';
import WmPicture from '@wavemaker/app-rn-runtime/components/basic/picture/picture.component';
import WmContainer from '@wavemaker/app-rn-runtime/components/container/container.component';
import WmButton from '@wavemaker/app-rn-runtime/components/basic/button/button.component';




export const ActionList = React.memo(
    ({ $item, $index, list, fragment }) => {
      const item = $item;
      const [currentItemWidgets] = React.useState({});
      list.itemWidgets = list.itemWidgets || [];
      list.itemWidgets[$index] = currentItemWidgets;
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
        <>
          <WmListTemplate
            layout="inline"
            name="listtemplate2"
            id={'list_item_' + $index + '_listtemplate2'}
            listener={listener}>
            <WmContainer
              name="container3"
              id={'repeat_item_' + $index + '_container3'}
              classname="media-left"
              listener={listener}>
              <WmPicture
                name="Picture"
                shape="circle"
                picturesource={$item.image}
                id={'repeat_item_' + $index + '_Picture'}
                pictureplaceholder="resources/images/imagelists/default-image.png"
                styles={{ root: { height: 32, width: 32 }, text: {} }}
                classname="media-object"
                listener={listener}></WmPicture>
            </WmContainer>
            <WmContainer
              name="container4"
              id={'repeat_item_' + $index + '_container4'}
              styles={{ root: { paddingLeft: 10 }, text: {} }}
              classname="media-body"
              listener={listener}>
              <WmLabel
                name="Name"
                caption="Name"
                fontunit="em"
                id={'repeat_item_' + $index + '_Name'}
                styles={{ root: { fontSize: 1.143 }, text: { fontSize: 1.143 } }}
                classname="p media-heading"
                listener={listener}></WmLabel>
              <WmLabel
                name="JobTitle"
                caption="JobTitle"
                id={'repeat_item_' + $index + '_JobTitle'}
                classname="p text-muted"
                listener={listener}></WmLabel>
            </WmContainer>
            <WmContainer
              name="container5"
              id={'repeat_item_' + $index + '_container5'}
              classname="media-right media-top"
              listener={listener}>
              <WmButton
                iconclass="wi wi-share fa-2x"
                name="button1"
                id={'repeat_item_' + $index + '_button1'}
                classname="btn-transparent"
                listener={listener}></WmButton>
            </WmContainer>
          </WmListTemplate>
        </>
      );
    }
  );