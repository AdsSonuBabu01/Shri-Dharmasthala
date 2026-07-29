import { BlogPost } from '../types';
import { enhanceBlogPost } from '../utils/siteSeoEnhancer';
import { EXISTING_BLOGS } from './blogs/existingBlogs';
import { BLOGS_1_TO_10 } from './blogs/prompts1to10';
import { BLOGS_11_TO_20 } from './blogs/prompts11to20';
import { BLOGS_21_TO_30 } from './blogs/prompts21to30';
import { BLOGS_31_TO_40 } from './blogs/prompts31to40';
import { BLOGS_41_TO_50 } from './blogs/prompts41to50';
import { BLOGS_51_TO_60 } from './blogs/prompts51to60';
import { BLOGS_61_TO_70 } from './blogs/prompts61to70';
import { BLOGS_71_TO_80 } from './blogs/prompts71to80';
import { BLOGS_81_TO_90 } from './blogs/prompts81to90';
import { BLOGS_91_TO_100 } from './blogs/prompts91to100';
import { BLOGS_101_TO_110 } from './blogs/prompts101to110';
import { BLOGS_111_TO_120 } from './blogs/prompts111to120';
import { BLOGS_121_TO_130 } from './blogs/prompts121to130';
import { BLOGS_131_TO_140 } from './blogs/prompts131to140';
import { BLOGS_141_TO_150 } from './blogs/prompts141to150';
import { BLOGS_151_TO_160 } from './blogs/prompts151to160';
import { BLOGS_161_TO_170 } from './blogs/prompts161to170';
import { BLOGS_171_TO_180 } from './blogs/prompts171to180';
import { BLOGS_181_TO_190 } from './blogs/prompts181to190';
import { BLOGS_191_TO_200 } from './blogs/prompts191to200';
import { BLOGS_201_TO_210 } from './blogs/prompts201to210';
import { BLOGS_211_TO_220 } from './blogs/prompts211to220';
import { BLOGS_221_TO_230 } from './blogs/prompts221to230';
import { BLOGS_231_TO_240 } from './blogs/prompts231to240';
import { BLOGS_241_TO_250 } from './blogs/prompts241to250';
import { BLOGS_251_TO_260 } from './blogs/prompts251to260';
import { BLOGS_261_TO_270 } from './blogs/prompts261to270';
import { BLOGS_271_TO_275 } from './blogs/prompts271to275';
import { BLOGS_276_TO_285 } from './blogs/prompts276to285';
import { BLOGS_286_TO_295 } from './blogs/prompts286to295';
import { BLOGS_BATCH2_1_TO_15 } from './blogs/promptsBatch2_1to15';
import { BLOGS_BATCH2_16_TO_30 } from './blogs/promptsBatch2_16to30';
import { BLOGS_BATCH2_31_TO_45 } from './blogs/promptsBatch2_31to45';
import { BLOGS_BATCH2_46_TO_60 } from './blogs/promptsBatch2_46to60';
import { BLOGS_BATCH2_61_TO_75 } from './blogs/promptsBatch2_61to75';
import { BLOGS_BATCH2_76_TO_90 } from './blogs/promptsBatch2_76to90';
import { BLOGS_BATCH2_91_TO_101 } from './blogs/promptsBatch2_91to101';
import { BLOGS_BATCH3_1_TO_20 } from './blogs/promptsBatch3_1to20';
import { BLOGS_BATCH3_21_TO_40 } from './blogs/promptsBatch3_21to40';
import { BLOGS_BATCH3_41_TO_60 } from './blogs/promptsBatch3_41to60';
import { BLOGS_BATCH3_61_TO_80 } from './blogs/promptsBatch3_61to80';
import { BLOGS_BATCH3_81_TO_100 } from './blogs/promptsBatch3_81to100';
import { BLOGS_BATCH3_101_TO_120 } from './blogs/promptsBatch3_101to120';
import { BLOGS_BATCH3_121_TO_140 } from './blogs/promptsBatch3_121to140';
import { BLOGS_BATCH3_141_TO_160 } from './blogs/promptsBatch3_141to160';
import { BLOGS_BATCH3_161_TO_180 } from './blogs/promptsBatch3_161to180';
import { BLOGS_BATCH3_181_TO_200 } from './blogs/promptsBatch3_181to200';
import { BLOGS_BATCH4_1_TO_20 } from './blogs/promptsBatch4_1to20';
import { BLOGS_BATCH4_21_TO_40 } from './blogs/promptsBatch4_21to40';
import { BLOGS_BATCH4_41_TO_60 } from './blogs/promptsBatch4_41to60';
import { BLOGS_BATCH4_61_TO_80 } from './blogs/promptsBatch4_61to80';
import { BLOGS_BATCH4_81_TO_98 } from './blogs/promptsBatch4_81to98';
import { BLOGS_BATCH5_1_TO_10 } from './blogs/promptsBatch5_1to10';
import { BLOGS_BATCH5_11_TO_25 } from './blogs/promptsBatch5_11to25';
import { BLOGS_BATCH5_26_TO_40 } from './blogs/promptsBatch5_26to40';
import { BLOGS_BATCH5_41_TO_55 } from './blogs/promptsBatch5_41to55';
import { BLOGS_BATCH5_56_TO_70 } from './blogs/promptsBatch5_56to70';
import { BLOGS_BATCH5_71_TO_85 } from './blogs/promptsBatch5_71to85';
import { BLOGS_BATCH5_86_TO_100 } from './blogs/promptsBatch5_86to100';
import { BLOGS_BATCH5_101_TO_115 } from './blogs/promptsBatch5_101to115';
import { BLOGS_BATCH6_1_TO_18 } from './blogs/promptsBatch6_1to18';
import { BLOGS_BATCH6_19_TO_35 } from './blogs/promptsBatch6_19to35';
import { BLOGS_BATCH7_1_TO_15 } from './blogs/promptsBatch7_1to15';
import { BLOGS_BATCH7_16_TO_30 } from './blogs/promptsBatch7_16to30';
import { BLOGS_BATCH8_1_TO_22 } from './blogs/promptsBatch8_1to22';
import { BLOGS_BATCH8_23_TO_45 } from './blogs/promptsBatch8_23to45';
import { BLOGS_KEYWORD_1_TO_15 } from './blogs/promptsKw1to15';
import { BLOGS_KEYWORD_16_TO_30 } from './blogs/promptsKw16to30';
import { BLOGS_KEYWORD_31_TO_45 } from './blogs/promptsKw31to45';
import { BLOGS_KEYWORD_46_TO_60 } from './blogs/promptsKw46to60';
import { BLOGS_KEYWORD_61_TO_75 } from './blogs/promptsKw61to75';
import { BLOGS_KEYWORD_76_TO_90 } from './blogs/promptsKw76to90';
import { BLOGS_KEYWORD_91_TO_102 } from './blogs/promptsKw91to102';
import { BLOGS_TRUST_GUEST_HOUSES_1_TO_10 } from './blogs/promptsTrustGuestHouses1to10';
import { BLOGS_TRUST_GUEST_HOUSES_HUB } from './blogs/promptsTrustGuestHousesHub';

const ALL_RAW_BLOGS: BlogPost[] = [
  ...BLOGS_TRUST_GUEST_HOUSES_HUB,
  ...BLOGS_TRUST_GUEST_HOUSES_1_TO_10,
  ...BLOGS_BATCH8_1_TO_22,
  ...BLOGS_BATCH8_23_TO_45,
  ...BLOGS_BATCH7_1_TO_15,
  ...BLOGS_BATCH7_16_TO_30,
  ...BLOGS_BATCH6_1_TO_18,
  ...BLOGS_BATCH6_19_TO_35,
  ...BLOGS_BATCH5_1_TO_10,
  ...BLOGS_BATCH5_11_TO_25,
  ...BLOGS_BATCH5_26_TO_40,
  ...BLOGS_BATCH5_41_TO_55,
  ...BLOGS_BATCH5_56_TO_70,
  ...BLOGS_BATCH5_71_TO_85,
  ...BLOGS_BATCH5_86_TO_100,
  ...BLOGS_BATCH5_101_TO_115,
  ...BLOGS_BATCH4_1_TO_20,
  ...BLOGS_BATCH4_21_TO_40,
  ...BLOGS_BATCH4_41_TO_60,
  ...BLOGS_BATCH4_61_TO_80,
  ...BLOGS_BATCH4_81_TO_98,
  ...BLOGS_BATCH3_1_TO_20,
  ...BLOGS_BATCH3_21_TO_40,
  ...BLOGS_BATCH3_41_TO_60,
  ...BLOGS_BATCH3_61_TO_80,
  ...BLOGS_BATCH3_81_TO_100,
  ...BLOGS_BATCH3_101_TO_120,
  ...BLOGS_BATCH3_121_TO_140,
  ...BLOGS_BATCH3_141_TO_160,
  ...BLOGS_BATCH3_161_TO_180,
  ...BLOGS_BATCH3_181_TO_200,
  ...BLOGS_BATCH2_1_TO_15,
  ...BLOGS_BATCH2_16_TO_30,
  ...BLOGS_BATCH2_31_TO_45,
  ...BLOGS_BATCH2_46_TO_60,
  ...BLOGS_BATCH2_61_TO_75,
  ...BLOGS_BATCH2_76_TO_90,
  ...BLOGS_BATCH2_91_TO_101,
  ...BLOGS_KEYWORD_1_TO_15,
  ...BLOGS_KEYWORD_16_TO_30,
  ...BLOGS_KEYWORD_31_TO_45,
  ...BLOGS_KEYWORD_46_TO_60,
  ...BLOGS_KEYWORD_61_TO_75,
  ...BLOGS_KEYWORD_76_TO_90,
  ...BLOGS_KEYWORD_91_TO_102,
  ...EXISTING_BLOGS,
  ...BLOGS_1_TO_10,
  ...BLOGS_11_TO_20,
  ...BLOGS_21_TO_30,
  ...BLOGS_31_TO_40,
  ...BLOGS_41_TO_50,
  ...BLOGS_51_TO_60,
  ...BLOGS_61_TO_70,
  ...BLOGS_71_TO_80,
  ...BLOGS_81_TO_90,
  ...BLOGS_91_TO_100,
  ...BLOGS_101_TO_110,
  ...BLOGS_111_TO_120,
  ...BLOGS_121_TO_130,
  ...BLOGS_131_TO_140,
  ...BLOGS_141_TO_150,
  ...BLOGS_151_TO_160,
  ...BLOGS_161_TO_170,
  ...BLOGS_171_TO_180,
  ...BLOGS_181_TO_190,
  ...BLOGS_191_TO_200,
  ...BLOGS_201_TO_210,
  ...BLOGS_211_TO_220,
  ...BLOGS_221_TO_230,
  ...BLOGS_231_TO_240,
  ...BLOGS_241_TO_250,
  ...BLOGS_251_TO_260,
  ...BLOGS_261_TO_270,
  ...BLOGS_271_TO_275,
  ...BLOGS_276_TO_285,
  ...BLOGS_286_TO_295
];

const seenBlogSlugs = new Set<string>();
export const BLOGS_DATA: BlogPost[] = ALL_RAW_BLOGS
  .filter((post) => {
    if (seenBlogSlugs.has(post.slug)) {
      return false;
    }
    seenBlogSlugs.add(post.slug);
    return true;
  })
  .map((post) => enhanceBlogPost(post));

