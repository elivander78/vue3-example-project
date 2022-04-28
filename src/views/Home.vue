<template>
  <div class="content">
    <el-container class="container">
      <template v-if="false">
            <div class="tariffs w-full">
              <el-row :gutter="50">
                <el-col :sm="12">
                  <div class="tariff-card">
                    <span class="bg-letter uppercase">C</span>
                    <b class="tariff-card__title uppercase mb-2">Comfort</b>
                    <div class="tariff-card__price mb-4">5 000$</div>
                    <div class="flex items-end">
                      <el-button class="btn-yellow mt-2" type="warning" size="large">Оформить</el-button>
                      <div class="flex items-center ml-auto">
                        <el-tooltip
                            placement="top"
                            content="Информация, которую вам нужно знать"
                        >
                          <a href="#" class="mr-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.9999 2.7502C17.1089 2.7502 21.2499 6.8922 21.2499 12.0002C21.2499 17.1082 17.1089 21.2502 11.9999 21.2502C6.89191 21.2502 2.74991 17.1082 2.74991 12.0002C2.74991 6.8922 6.89191 2.7502 11.9999 2.7502Z"
                                    stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M11.995 8.2043V12.6233" stroke="#FFD700" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"/>
                              <path d="M11.995 15.7961H12.005" stroke="#FFD700" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                          </a>
                        </el-tooltip>
                        <span>Информация, которую вам нужно знать</span>
                      </div>
                    </div>
                  </div>
                </el-col>
                <el-col :sm="12">
                  <div class="tariff-card">
                    <span class="bg-letter uppercase">L</span>
                    <b class="tariff-card__title uppercase mb-2">Lux</b>
                    <div class="tariff-card__price mb-4">6 000$</div>
                    <div class="flex items-end">
                      <el-button class="btn-yellow mt-2" type="warning" size="large">Оформить</el-button>
                      <div class="flex items-center ml-auto">
                        <a href="#" class="mr-2">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.9999 2.7502C17.1089 2.7502 21.2499 6.8922 21.2499 12.0002C21.2499 17.1082 17.1089 21.2502 11.9999 21.2502C6.89191 21.2502 2.74991 17.1082 2.74991 12.0002C2.74991 6.8922 6.89191 2.7502 11.9999 2.7502Z"
                                  stroke="#FFD700" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M11.995 8.2043V12.6233" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M11.995 15.7961H12.005" stroke="#FFD700" stroke-width="1.5" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                          </svg>
                        </a>
                        <span>Информация, которую вам нужно знать</span>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
      </template>
      <template v-if="true">
            <h1 class="text-center capitalize mb-6">Umrangizni oson rejalashtiring!</h1>
            <el-form :model="searchFormData" ref="searchForm" class="searchForm flex flex-wrap w-full mb-8">
              <el-row :gutter="10">
                <el-col :sm="8">
                  <el-form-item class="mb-3">
                    <el-date-picker class="grow" v-model="value1" type="date" placeholder="21 Апр 2022"/>
                  </el-form-item>
                </el-col>
                <el-col :sm="8">
                  <el-form-item class="mb-3">
                    <el-date-picker class="grow" v-model="value1" type="date" placeholder="Дата возвращения"/>
                  </el-form-item>
                </el-col>
                <el-col :sm="8">
                  <el-form-item class="mb-3">
                    <el-dropdown trigger="click">
                    <span class="el-dropdown-link">
                      <span class="mr-auto">Dropdown List</span>
                      <el-icon class="el-icon--right ml-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="7.71929" cy="4.85203" rx="3.18535" ry="3.18535" stroke="#a5abb8"
                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.66676 12.4676C2.6659 12.2437 2.71598 12.0225 2.81321 11.8207C3.11832 11.2105 3.97873 10.8871 4.69269 10.7407C5.2076 10.6308 5.72962 10.5574 6.25486 10.521C7.22731 10.4356 8.20537 10.4356 9.17782 10.521C9.70302 10.5578 10.225 10.6312 10.74 10.7407C11.4539 10.8871 12.3144 11.18 12.6195 11.8207C12.815 12.2319 12.815 12.7093 12.6195 13.1205C12.3144 13.7613 11.4539 14.0542 10.74 14.1945C10.2257 14.3089 9.70348 14.3844 9.17782 14.4203C8.38633 14.4874 7.59114 14.4996 6.79796 14.4569C6.61489 14.4569 6.43793 14.4569 6.25486 14.4203C5.73117 14.3849 5.21096 14.3094 4.6988 14.1945C3.97873 14.0542 3.12442 13.7613 2.81321 13.1205C2.71648 12.9165 2.66645 12.6934 2.66676 12.4676Z"
                                stroke="#a5abb8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </el-icon>
                      <span class="ml-4">2</span>
                      <el-icon class="el-icon--right ml-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="7.71929" cy="4.85203" rx="3.18535" ry="3.18535" stroke="#a5abb8"
                                  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M2.66676 12.4676C2.6659 12.2437 2.71598 12.0225 2.81321 11.8207C3.11832 11.2105 3.97873 10.8871 4.69269 10.7407C5.2076 10.6308 5.72962 10.5574 6.25486 10.521C7.22731 10.4356 8.20537 10.4356 9.17782 10.521C9.70302 10.5578 10.225 10.6312 10.74 10.7407C11.4539 10.8871 12.3144 11.18 12.6195 11.8207C12.815 12.2319 12.815 12.7093 12.6195 13.1205C12.3144 13.7613 11.4539 14.0542 10.74 14.1945C10.2257 14.3089 9.70348 14.3844 9.17782 14.4203C8.38633 14.4874 7.59114 14.4996 6.79796 14.4569C6.61489 14.4569 6.43793 14.4569 6.25486 14.4203C5.73117 14.3849 5.21096 14.3094 4.6988 14.1945C3.97873 14.0542 3.12442 13.7613 2.81321 13.1205C2.71648 12.9165 2.66645 12.6934 2.66676 12.4676Z"
                                stroke="#a5abb8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </el-icon>
                      <span class="ml-4">2</span>
                    </span>
                      <template #dropdown>
                        <el-dropdown-menu>
                          <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                          <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
                        </el-dropdown-menu>
                      </template>
                    </el-dropdown>
                  </el-form-item>
                </el-col>
                <el-col>
                  <el-button class="btn-yellow w-full" type="warning" @click.prevent.stop="onSubmit">Поиск</el-button>
                </el-col>
              </el-row>
            </el-form>
      </template>
      <template v-if="true">
            <el-form :model="contentFormData" ref="contentForm" class="contentForm flex flex-wrap w-full">
              <div class="data-section w-full mb-3">
                <el-table :data="toursData" class="tours-table mb-8">
                  <el-table-column prop="description" label="Описание тура" width="250"/>
                  <el-table-column prop="country" label="Страна"/>
                  <el-table-column prop="duration" label="Продолжительность"/>
                  <el-table-column prop="days" label="Ночей" width="120"/>
                </el-table>
              </div>
              <div class="data-section w-full mb-3">
                <el-table :data="lowPriceData" class="low-price-table">
                  <el-table-column prop="" label="Календарь низких цен"/>
                </el-table>
              </div>
              <div class="data-section w-full mt-5 mb-3">
                <div class="data-section__title">Проживание</div>
                <el-table :data="accommodationData" class="accommodation-table">
                  <el-table-column prop="hotelName" label="Гостиница"/>
                  <el-table-column prop="city" label="Город" width="100"/>
                  <el-table-column prop="number" label="Номер" width="190"/>
                  <el-table-column prop="placement" label="Размещение" width="130"/>
                  <el-table-column prop="nutrition" label="Питание" width="90"/>
                  <el-table-column prop="periodOfResidence" label="Период проживания"/>
                </el-table>
              </div>
              <div class="data-section w-full mt-5 mb-3">
                <div class="data-section__title">Транспорт</div>
                <el-table :data="transportData" class="transport-table">
                  <el-table-column label="Рейс">
                    <template #default='{row, $index}'>
                      <el-select class="w-full" v-model="row.flight" placeholder="Placeholder">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                      </el-select>
                    </template>
                  </el-table-column>
                  <el-table-column prop="date" label="Дата" width="120"/>
                  <el-table-column prop="amount" label="Кол-во" width="100"/>
                </el-table>
              </div>
              <div class="data-section w-full mt-5 mb-3">
                <div class="data-section__title">Дополнительные услуги</div>
                <el-table :data="additionalServicesData" class="additional-services-table">
                  <el-table-column prop="name" label="Название"/>
                  <el-table-column prop="date" label="Дата" width="220"/>
                  <el-table-column prop="amount" label="Количество" width="150"/>
                  <el-table-column prop="status" label="" width="130"/>
                  <el-table-column width="150">
                    <template #default='{row, $index}'>
                      <el-button class="btn-yellow w-full" v-if="row.isDeleted" type="warning">Удалить</el-button>
                      <el-button class="btn-blue w-full" v-else type="primary">Добавить</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div class="data-section w-full mt-5 mb-3 pt-10">
                <div class="data-section__title">Информация о туристе 1</div>
                <el-row :gutter="25">
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="MR/MRS/CHD/INF" :label-width="150">
                      <el-select class="grow" placeholder="MRS">
                        <el-option
                            label="safdasd"
                            value="asfasdas"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Гражданство" :label-width="150">
                      <el-select class="grow" placeholder="Узбекистан">
                        <el-option
                            label="safdasd"
                            value="asfasdas"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Пол" :label-width="150">
                      <el-radio-group class="flex items-center justify-start grow">
                        <el-radio class="mx-14" label="Муж" />
                        <el-radio class="mx-14" label="Жен" />
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Тип документа" :label-width="150">
                      <el-select class="grow" placeholder="Заграничный паспорт">
                        <el-option
                            label="safdasd"
                            value="asfasdas"
                        />
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Фамилия по-латински" :label-width="150">
                      <el-input class="" placeholder="Фамилия по-латински" />
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Серия документа" :label-width="150">
                      <el-input class="" placeholder="Имя по-латински" />
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Имя по-латински" :label-width="150">
                      <el-input class="" placeholder="Имя по-латински" />
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Номер документа" :label-width="150">
                      <el-input class="" placeholder="Номер документа" />
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Дата рождения" :label-width="150">
                      <el-date-picker
                        type="date"
                        placeholder="ДД.ММ.ГГГГ"
                        style="width: 50%"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :sm="12">
                    <el-form-item class="items-center text-left mt-4 mb-0" label="Действителен до" :label-width="150">
                      <el-date-picker
                        type="date"
                        placeholder="ДД.ММ.ГГГГ"
                        style="width: 50%"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
              </div>
              <div class="data-section w-full mt-5 mb-3 pt-10">
                <div class="data-section__title">Информация о туристе 2</div>
                <el-row :gutter="25">
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="MR/MRS/CHD/INF" :label-width="150">
                        <el-select class="grow" placeholder="MRS">
                          <el-option
                              label="safdasd"
                              value="asfasdas"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Гражданство" :label-width="150">
                        <el-select class="grow" placeholder="Узбекистан">
                          <el-option
                              label="safdasd"
                              value="asfasdas"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Пол" :label-width="150">
                        <el-radio-group class="flex items-center justify-start grow">
                          <el-radio class="mx-14" label="Муж" />
                          <el-radio class="mx-14" label="Жен" />
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Тип документа" :label-width="150">
                        <el-select class="grow" placeholder="Заграничный паспорт">
                          <el-option
                              label="safdasd"
                              value="asfasdas"
                          />
                        </el-select>
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Фамилия по-латински" :label-width="150">
                        <el-input class="" placeholder="Фамилия по-латински" />
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Серия документа" :label-width="150">
                        <el-input class="" placeholder="Имя по-латински" />
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Имя по-латински" :label-width="150">
                        <el-input class="" placeholder="Имя по-латински" />
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Номер документа" :label-width="150">
                        <el-input class="" placeholder="Номер документа" />
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Дата рождения" :label-width="150">
                        <el-date-picker
                          type="date"
                          placeholder="ДД.ММ.ГГГГ"
                          style="width: 50%"
                        />
                      </el-form-item>
                    </el-col>
                    <el-col :sm="12">
                      <el-form-item class="items-center text-left mt-4 mb-0" label="Действителен до" :label-width="150">
                        <el-date-picker
                          type="date"
                          placeholder="ДД.ММ.ГГГГ"
                          style="width: 50%"
                        />
                      </el-form-item>
                    </el-col>
                  </el-row>
                </div>
                <el-row class="grow" :gutter="10">
                  <el-col :sm="12">
                    <div class="data-section w-full mt-5 mb-3">
                      <div class="data-section__title">Информация о заказчике по общегражданскому паспорту</div>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="ФИО" :label-width="150">
                        <el-input class="" placeholder="ФИО" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Адрес" :label-width="150">
                        <el-input class="" placeholder="Адрес" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Дата рождения" :label-width="150">
                        <el-date-picker
                          type="date"
                          placeholder="ДД.ММ.ГГГГ"
                          style="width: 50%"
                        />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Серия паспорта" :label-width="150">
                        <el-input class="" placeholder="Серия паспорта" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Номер паспорта" :label-width="150">
                        <el-input class="" placeholder="Номер паспорта" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Дата выдачи" :label-width="150">
                        <el-date-picker
                          type="date"
                          placeholder="ДД.ММ.ГГГГ"
                          style="width: 50%"
                        />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Код подразделения" :label-width="150">
                        <el-input class="" placeholder="Код подразделения" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="Мобильный телефон" :label-width="150">
                        <el-input class="" placeholder="Мобильный телефон" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-3 mb-0" label="E-mail" :label-width="150">
                        <el-input class="" placeholder="E-mail" />
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :sm="12">
                    <div class="data-section w-full mt-5 mb-3">
                      <div class="data-section__title">Примечание к заявке</div>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <div class="flex items-center">
                          <el-checkbox label="вместе с заявкой №" name="type" />
                          <el-input class="ml-8" placeholder="" :disabled="true" />
                        </div>
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-checkbox label="молодожены" name="type" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-checkbox label="вид на море" name="type" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-checkbox label="тихое место" name="type" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-checkbox label="постоянный гость отеля" name="type" />
                      </el-form-item>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-checkbox label="люлька для младенца в номер" name="type" />
                      </el-form-item>
                    </div>
                    <div class="data-section w-full mt-12 mb-3">
                      <div class="data-section__title">Примечание к заявке</div>
                      <el-form-item class="items-center text-left mt-4 mb-0">
                        <el-input type="textarea" :rows="3" />
                      </el-form-item>
                    </div>
                  </el-col>
                </el-row>
              <div class="data-section w-full mt-5 mb-3">
                <div class="data-section__title">Цена</div>
                <div class="flex flex-col items-center">
                  <div><b class="text-lg text-black">5000 USD</b></div>
                  <el-form-item class="items-center text-left mt-3 mb-5">
                    <el-checkbox name="type" label="Подтверждаю, что являюсь частным лицом." />
                    <a href="#" class="text-yellow hover-underline ml-2">С договором согласен.</a>
                  </el-form-item>
                </div>
                <div class="flex items-center justify-center">
                  <el-button class="btn-yellow" type="warning" size="large">Пересчитать</el-button>
                  <el-button class="btn-silver" type="info" size="large">Бронировать</el-button>
                </div>
              </div>
            </el-form>
      </template>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {},
  data: () => ({
    searchFormData: {},
    toursData: [
      {
        id: 1,
        description: 'Умра Сафари из Ташкента',
        country: 'Саудовская Аравия',
        duration: '10.05.2022—20.05.2022',
        days: 10
      }
    ],
    contentFormData: {},
    lowPriceData: [],
    accommodationData: [
      {
        id: 1,
        hotelName: 'Madinah A Fairmont Hotel 5* | Makka',
        city: 'Madinah',
        number: 'Standard QUAD Room',
        placement: '2 Adl',
        nutrition: 'BB',
        periodOfResidence: '10.05.2022—20.05.2022'
      }
    ],
    transportData: [
      {
        id: 1,
        flight: '[Эконом] (Места: по запросу) HY100 (Ташкент — Madinah )',
        date: '10.05.2022',
        amount: 2
      },
      {
        id: 2,
        flight: '[Эконом] (Места: по запросу) HY101 (Madinah — Ташкент )',
        date: '20.05.2022',
        amount: null
      }
    ],
    additionalServicesData: [
      {
        id: 1,
        name: 'Extra Service: Размеры одежд: 2XL',
        date: '0.05.2022 - 20.05.2022',
        amount: 2,
        status: 'Без доплат',
        isDeleted: true
      },
      {
        id: 2,
        name: 'Extra Service: Размеры одежд: 3XL',
        date: '0.05.2022 - 20.05.2022',
        amount: 2,
        status: 'Без доплат',
        isDeleted: false
      },
      {
        id: 3,
        name: 'Extra Service: Размеры одежд: 4XL',
        date: '0.05.2022 - 20.05.2022',
        amount: 2,
        status: 'Без доплат',
        isDeleted: false
      },
      {
        id: 4,
        name: 'Extra Service: Размеры одежд: L',
        date: '0.05.2022 - 20.05.2022',
        amount: 2,
        status: 'Без доплат',
        isDeleted: false
      },
      {
        id: 5,
        name: 'Extra Service: Размеры одежд: M',
        date: '0.05.2022 - 20.05.2022',
        amount: 2,
        status: 'Без доплат',
        isDeleted: false
      }
    ]
  }),
  methods: {
    onSubmit() {
      console.log('submit')
    }
  }
})
</script>

<style lang="scss" scoped>
@import 'src/assets/scss/utils/vars.scss';

.searchForm {
  max-width: 720px;
  margin-left: auto;
  margin-right: auto;

  .el-dropdown {
    display: block;
    flex-grow: 1;

    .el-dropdown-link {
      width: 100%;
      height: 40px;
      display: inline-flex;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 0 11px;
      background-color: var(--el-input-bg-color, var(--el-fill-color-blank));
      background-image: none;
      border-radius: var(--el-input-border-radius, var(--el-border-radius-base));
      transition: var(--el-transition-box-shadow);
      box-shadow: 0 0 0 1px var(--el-input-border-color, var(--el-border-color)) inset;

      -webkit-appearance: none;
      //color: var(--el-input-text-color,var(--el-text-color-regular));
      color: #a5abb8;
      font-size: inherit;
      line-height: 32px;
      outline: 0;
      border: none;

      span, i, svg {
        vertical-align: middle;
      }

      &:hover {
        box-shadow: 0 0 0 1px var(--el-input-hover-border-color) inset;
      }
    }
  }

  .el-button {
    font-weight: 500;
  }
}

.contentForm {
  max-width: 1050px;
  margin-left: auto;
  margin-right: auto;
}

.tariffs {
  max-width: 1420px;
  margin-left: auto;
  margin-right: auto;
}

.tariff-card {
  position: relative;
  background-color: rgba(7, 87, 160, .8);
  border-radius: 5px;
  color: #fff;
  padding: 10px 20px 20px;

  .bg-letter {
    position: absolute;
    font-weight: 700;
    font-size: 250px;
    line-height: 1;
    right: 20px;
    bottom: 8px;
    opacity: .1;
  }

  &__title {
    font-size: 96px;
    line-height: 1;
  }

  &__price {
    font-size: 48px;
    line-height: 50px;
    letter-spacing: -1.78px;
  }
}

</style>
