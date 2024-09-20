# `wafDedicatedCcRuleV1` Submodule <a name="`wafDedicatedCcRuleV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedCcRuleV1 <a name="WafDedicatedCcRuleV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1 opentelekomcloud_waf_dedicated_cc_rule_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1(scope: Construct, id: string, config: WafDedicatedCcRuleV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config">WafDedicatedCcRuleV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config">WafDedicatedCcRuleV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions">resetConditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime">resetLockTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory">resetTagCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents">resetTagContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex">resetTagIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum">resetUnlockNum</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction"></a>

```typescript
public putAction(value: IResolvable | WafDedicatedCcRuleV1Action[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putAction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]

---

##### `putConditions` <a name="putConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions"></a>

```typescript
public putConditions(value: IResolvable | WafDedicatedCcRuleV1Conditions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putConditions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafDedicatedCcRuleV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---

##### `resetConditions` <a name="resetConditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetConditions"></a>

```typescript
public resetConditions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLockTime` <a name="resetLockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetLockTime"></a>

```typescript
public resetLockTime(): void
```

##### `resetTagCategory` <a name="resetTagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagCategory"></a>

```typescript
public resetTagCategory(): void
```

##### `resetTagContents` <a name="resetTagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagContents"></a>

```typescript
public resetTagContents(): void
```

##### `resetTagIndex` <a name="resetTagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTagIndex"></a>

```typescript
public resetTagIndex(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUnlockNum` <a name="resetUnlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.resetUnlockNum"></a>

```typescript
public resetUnlockNum(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafDedicatedCcRuleV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedCcRuleV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedCcRuleV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedCcRuleV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action">action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status">status</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput">actionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput">conditionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput">limitNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput">limitPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput">lockTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput">modeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput">tagCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput">tagContentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput">tagIndexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput">tagTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput">unlockNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum">limitNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod">limitPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime">lockTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode">mode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory">tagCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents">tagContents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex">tagIndex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType">tagType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum">unlockNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url">url</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.action"></a>

```typescript
public readonly action: WafDedicatedCcRuleV1ActionList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList">WafDedicatedCcRuleV1ActionList</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditions"></a>

```typescript
public readonly conditions: WafDedicatedCcRuleV1ConditionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList">WafDedicatedCcRuleV1ConditionsList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.status"></a>

```typescript
public readonly status: number;
```

- *Type:* number

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedCcRuleV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference">WafDedicatedCcRuleV1TimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.actionInput"></a>

```typescript
public readonly actionInput: IResolvable | WafDedicatedCcRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.conditionsInput"></a>

```typescript
public readonly conditionsInput: IResolvable | WafDedicatedCcRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `limitNumInput`<sup>Optional</sup> <a name="limitNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNumInput"></a>

```typescript
public readonly limitNumInput: number;
```

- *Type:* number

---

##### `limitPeriodInput`<sup>Optional</sup> <a name="limitPeriodInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriodInput"></a>

```typescript
public readonly limitPeriodInput: number;
```

- *Type:* number

---

##### `lockTimeInput`<sup>Optional</sup> <a name="lockTimeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTimeInput"></a>

```typescript
public readonly lockTimeInput: number;
```

- *Type:* number

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.modeInput"></a>

```typescript
public readonly modeInput: number;
```

- *Type:* number

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `tagCategoryInput`<sup>Optional</sup> <a name="tagCategoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategoryInput"></a>

```typescript
public readonly tagCategoryInput: string;
```

- *Type:* string

---

##### `tagContentsInput`<sup>Optional</sup> <a name="tagContentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContentsInput"></a>

```typescript
public readonly tagContentsInput: string[];
```

- *Type:* string[]

---

##### `tagIndexInput`<sup>Optional</sup> <a name="tagIndexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndexInput"></a>

```typescript
public readonly tagIndexInput: string;
```

- *Type:* string

---

##### `tagTypeInput`<sup>Optional</sup> <a name="tagTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagTypeInput"></a>

```typescript
public readonly tagTypeInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafDedicatedCcRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---

##### `unlockNumInput`<sup>Optional</sup> <a name="unlockNumInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNumInput"></a>

```typescript
public readonly unlockNumInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitNum"></a>

```typescript
public readonly limitNum: number;
```

- *Type:* number

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.limitPeriod"></a>

```typescript
public readonly limitPeriod: number;
```

- *Type:* number

---

##### `lockTime`<sup>Required</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.lockTime"></a>

```typescript
public readonly lockTime: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `tagCategory`<sup>Required</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

---

##### `tagContents`<sup>Required</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagContents"></a>

```typescript
public readonly tagContents: string[];
```

- *Type:* string[]

---

##### `tagIndex`<sup>Required</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagIndex"></a>

```typescript
public readonly tagIndex: string;
```

- *Type:* string

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tagType"></a>

```typescript
public readonly tagType: string;
```

- *Type:* string

---

##### `unlockNum`<sup>Required</sup> <a name="unlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.unlockNum"></a>

```typescript
public readonly unlockNum: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedCcRuleV1Action <a name="WafDedicatedCcRuleV1Action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedCcRuleV1Action: wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#content WafDedicatedCcRuleV1#content}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#content_type WafDedicatedCcRuleV1#content_type}.

---

### WafDedicatedCcRuleV1Conditions <a name="WafDedicatedCcRuleV1Conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedCcRuleV1Conditions: wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category">category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation">logicOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents">contents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index">index</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId">valueListId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#category WafDedicatedCcRuleV1#category}.

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.logicOperation"></a>

```typescript
public readonly logicOperation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#logic_operation WafDedicatedCcRuleV1#logic_operation}.

---

##### `contents`<sup>Optional</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#contents WafDedicatedCcRuleV1#contents}.

---

##### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#index WafDedicatedCcRuleV1#index}.

---

##### `valueListId`<sup>Optional</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions.property.valueListId"></a>

```typescript
public readonly valueListId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#value_list_id WafDedicatedCcRuleV1#value_list_id}.

---

### WafDedicatedCcRuleV1Config <a name="WafDedicatedCcRuleV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedCcRuleV1Config: wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action">action</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]</code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum">limitNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod">limitPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode">mode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType">tagType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions">conditions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]</code> | conditions block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime">lockTime</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory">tagCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents">tagContents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex">tagIndex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum">unlockNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.action"></a>

```typescript
public readonly action: IResolvable | WafDedicatedCcRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#action WafDedicatedCcRuleV1#action}

---

##### `limitNum`<sup>Required</sup> <a name="limitNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitNum"></a>

```typescript
public readonly limitNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#limit_num WafDedicatedCcRuleV1#limit_num}.

---

##### `limitPeriod`<sup>Required</sup> <a name="limitPeriod" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.limitPeriod"></a>

```typescript
public readonly limitPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#limit_period WafDedicatedCcRuleV1#limit_period}.

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.mode"></a>

```typescript
public readonly mode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#mode WafDedicatedCcRuleV1#mode}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#policy_id WafDedicatedCcRuleV1#policy_id}.

---

##### `tagType`<sup>Required</sup> <a name="tagType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagType"></a>

```typescript
public readonly tagType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_type WafDedicatedCcRuleV1#tag_type}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#url WafDedicatedCcRuleV1#url}.

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.conditions"></a>

```typescript
public readonly conditions: IResolvable | WafDedicatedCcRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#conditions WafDedicatedCcRuleV1#conditions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#description WafDedicatedCcRuleV1#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#id WafDedicatedCcRuleV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `lockTime`<sup>Optional</sup> <a name="lockTime" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.lockTime"></a>

```typescript
public readonly lockTime: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#lock_time WafDedicatedCcRuleV1#lock_time}.

---

##### `tagCategory`<sup>Optional</sup> <a name="tagCategory" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagCategory"></a>

```typescript
public readonly tagCategory: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_category WafDedicatedCcRuleV1#tag_category}.

---

##### `tagContents`<sup>Optional</sup> <a name="tagContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagContents"></a>

```typescript
public readonly tagContents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_contents WafDedicatedCcRuleV1#tag_contents}.

---

##### `tagIndex`<sup>Optional</sup> <a name="tagIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.tagIndex"></a>

```typescript
public readonly tagIndex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#tag_index WafDedicatedCcRuleV1#tag_index}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedCcRuleV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#timeouts WafDedicatedCcRuleV1#timeouts}

---

##### `unlockNum`<sup>Optional</sup> <a name="unlockNum" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Config.property.unlockNum"></a>

```typescript
public readonly unlockNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#unlock_num WafDedicatedCcRuleV1#unlock_num}.

---

### WafDedicatedCcRuleV1Timeouts <a name="WafDedicatedCcRuleV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedCcRuleV1Timeouts: wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#create WafDedicatedCcRuleV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.19/docs/resources/waf_dedicated_cc_rule_v1#delete WafDedicatedCcRuleV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedCcRuleV1ActionList <a name="WafDedicatedCcRuleV1ActionList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get"></a>

```typescript
public get(index: number): WafDedicatedCcRuleV1ActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedCcRuleV1Action[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>[]

---


### WafDedicatedCcRuleV1ActionOutputReference <a name="WafDedicatedCcRuleV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ActionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedCcRuleV1Action;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Action">WafDedicatedCcRuleV1Action</a>

---


### WafDedicatedCcRuleV1ConditionsList <a name="WafDedicatedCcRuleV1ConditionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get"></a>

```typescript
public get(index: number): WafDedicatedCcRuleV1ConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedCcRuleV1Conditions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>[]

---


### WafDedicatedCcRuleV1ConditionsOutputReference <a name="WafDedicatedCcRuleV1ConditionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents">resetContents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex">resetIndex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId">resetValueListId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContents` <a name="resetContents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetContents"></a>

```typescript
public resetContents(): void
```

##### `resetIndex` <a name="resetIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetIndex"></a>

```typescript
public resetIndex(): void
```

##### `resetValueListId` <a name="resetValueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.resetValueListId"></a>

```typescript
public resetValueListId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput">categoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput">contentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput">indexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput">logicOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput">valueListIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents">contents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index">index</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation">logicOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId">valueListId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.categoryInput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* string

---

##### `contentsInput`<sup>Optional</sup> <a name="contentsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contentsInput"></a>

```typescript
public readonly contentsInput: string[];
```

- *Type:* string[]

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: string;
```

- *Type:* string

---

##### `logicOperationInput`<sup>Optional</sup> <a name="logicOperationInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperationInput"></a>

```typescript
public readonly logicOperationInput: string;
```

- *Type:* string

---

##### `valueListIdInput`<sup>Optional</sup> <a name="valueListIdInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListIdInput"></a>

```typescript
public readonly valueListIdInput: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `contents`<sup>Required</sup> <a name="contents" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.contents"></a>

```typescript
public readonly contents: string[];
```

- *Type:* string[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.index"></a>

```typescript
public readonly index: string;
```

- *Type:* string

---

##### `logicOperation`<sup>Required</sup> <a name="logicOperation" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.logicOperation"></a>

```typescript
public readonly logicOperation: string;
```

- *Type:* string

---

##### `valueListId`<sup>Required</sup> <a name="valueListId" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.valueListId"></a>

```typescript
public readonly valueListId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1ConditionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedCcRuleV1Conditions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Conditions">WafDedicatedCcRuleV1Conditions</a>

---


### WafDedicatedCcRuleV1TimeoutsOutputReference <a name="WafDedicatedCcRuleV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedCcRuleV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedCcRuleV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedCcRuleV1.WafDedicatedCcRuleV1Timeouts">WafDedicatedCcRuleV1Timeouts</a>

---



