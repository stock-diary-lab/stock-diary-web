import { WhiteContainer } from '@components/common/WhiteContainer/styled';
import {
  useAddPrincipleMutation,
  useDeletePrincipleMutation,
  useGetPrinciplesQuery,
  useUpdatePrincipleMutation,
} from '@stores/principle';
import { useEffect, useRef, useState } from 'react';
import * as CommonS from '../styled';
import * as S from './styled';

const MAX_LEN = 14;

function Principles() {
  const [addActive, setAddActive] = useState<boolean>(false);
  const [editActiveId, setEditActiveId] = useState<number | null>(null);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { data: principles } = useGetPrinciplesQuery({});
  const [addPrinciple] = useAddPrincipleMutation();
  const [updatePrinciple] = useUpdatePrincipleMutation();
  const [deletePrinciple] = useDeletePrincipleMutation();

  useEffect(() => {
    if (addActive) {
      textAreaRef.current?.focus();
    }
  }, [addActive]);

  return (
    <S.PrinciplesContainer>
      <CommonS.MyPageTitle>나의 원칙</CommonS.MyPageTitle>
      <WhiteContainer height="720px">
        <CommonS.MyPageItemContainer>
          {new Array(MAX_LEN).fill(0).map((_, idx) => {
            if (
              principles &&
              principles.length < MAX_LEN &&
              ((principles[idx - 1] && !principles[idx]) || (principles.length === 0 && idx === 0))
            ) {
              return (
                <CommonS.MyPageItem key="add">
                  {addActive ? (
                    <S.AddPrincipleTextArea
                      ref={textAreaRef}
                      rows={1}
                      onKeyPress={(e) => {
                        if (e.code === 'Enter' && !e.shiftKey) {
                          addPrinciple({ content: e.currentTarget.value });
                          setAddActive(false);
                        }
                      }}
                    />
                  ) : (
                    <S.AddPrincipleBtn
                      onClick={() => {
                        setAddActive(true);
                      }}
                    >
                      추가
                    </S.AddPrincipleBtn>
                  )}
                </CommonS.MyPageItem>
              );
            } else if (principles && principles[idx] && editActiveId && principles[idx].id === editActiveId) {
              return (
                <S.PrincipleItem key={`${principles[idx].id}-edit`}>
                  <S.AddPrincipleTextArea
                    rows={1}
                    defaultValue={principles[idx].content}
                    onBlur={() => {
                      setEditActiveId(principles[idx].id);
                    }}
                    onKeyPress={(e) => {
                      if (e.code === 'Enter' && !e.shiftKey) {
                        updatePrinciple({ id: principles[idx].id, content: e.currentTarget.value });
                        setEditActiveId(principles[idx].id);
                      }
                    }}
                  />
                  <CommonS.DeleteBtn
                    onClick={() => {
                      deletePrinciple({ id: principles[idx].id });
                    }}
                  >
                    삭제
                  </CommonS.DeleteBtn>
                </S.PrincipleItem>
              );
            } else
              return (
                <S.PrincipleItem
                  key={`${principles?.[idx]?.id}-${idx}`}
                  onClick={() => {
                    if (principles && !!principles[idx]) {
                      setEditActiveId(principles[idx].id);
                    }
                  }}
                >
                  {principles && principles[idx] && <S.CheckMark>✔</S.CheckMark>}
                  <S.PrincipleContent>{principles && principles[idx] && principles[idx].content}</S.PrincipleContent>
                </S.PrincipleItem>
              );
          })}

          {principles &&
            principles.slice(MAX_LEN).map((principle) =>
              principle.id === editActiveId ? (
                <S.PrincipleItem key={`${principle.id}-edit`}>
                  <S.AddPrincipleTextArea
                    rows={1}
                    defaultValue={principle.content}
                    onBlur={() => {
                      setEditActiveId(principle.id);
                    }}
                    onKeyPress={(e) => {
                      if (e.code === 'Enter' && !e.shiftKey) {
                        updatePrinciple({ id: principle.id, content: e.currentTarget.value });
                        setEditActiveId(principle.id);
                      }
                    }}
                  />
                  <CommonS.DeleteBtn
                    onClick={() => {
                      deletePrinciple({ id: principle.id });
                    }}
                  >
                    삭제
                  </CommonS.DeleteBtn>
                </S.PrincipleItem>
              ) : (
                <S.PrincipleItem
                  key={`${principle.id}-${principle.content.slice(0, 3)}`}
                  onClick={() => {
                    setEditActiveId(principle.id);
                  }}
                >
                  <S.CheckMark>✔</S.CheckMark>
                  <S.PrincipleContent>{principle.content}</S.PrincipleContent>
                </S.PrincipleItem>
              )
            )}
          {principles && principles.length >= MAX_LEN && (
            <CommonS.MyPageItem key="add-2">
              {addActive ? (
                <S.AddPrincipleTextArea
                  ref={textAreaRef}
                  rows={1}
                  onKeyPress={(e) => {
                    if (e.code === 'Enter' && !e.shiftKey) {
                      addPrinciple({ content: e.currentTarget.value });
                      setAddActive(false);
                    }
                  }}
                />
              ) : (
                <S.AddPrincipleBtn
                  onClick={() => {
                    setAddActive(true);
                  }}
                >
                  추가
                </S.AddPrincipleBtn>
              )}
            </CommonS.MyPageItem>
          )}
        </CommonS.MyPageItemContainer>
      </WhiteContainer>
    </S.PrinciplesContainer>
  );
}

export default Principles;
