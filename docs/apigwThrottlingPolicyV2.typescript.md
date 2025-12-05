# `apigwThrottlingPolicyV2` Submodule <a name="`apigwThrottlingPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigwThrottlingPolicyV2 <a name="ApigwThrottlingPolicyV2" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2 opentelekomcloud_apigw_throttling_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2(scope: Construct, id: string, config: ApigwThrottlingPolicyV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config">ApigwThrottlingPolicyV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config">ApigwThrottlingPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles">putAppThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles">putUserThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles">resetAppThrottles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests">resetMaxAppRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests">resetMaxIpRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests">resetMaxUserRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit">resetPeriodUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles">resetUserThrottles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAppThrottles` <a name="putAppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles"></a>

```typescript
public putAppThrottles(value: IResolvable | ApigwThrottlingPolicyV2AppThrottles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putAppThrottles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]

---

##### `putUserThrottles` <a name="putUserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles"></a>

```typescript
public putUserThrottles(value: IResolvable | ApigwThrottlingPolicyV2UserThrottles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.putUserThrottles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]

---

##### `resetAppThrottles` <a name="resetAppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetAppThrottles"></a>

```typescript
public resetAppThrottles(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAppRequests` <a name="resetMaxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxAppRequests"></a>

```typescript
public resetMaxAppRequests(): void
```

##### `resetMaxIpRequests` <a name="resetMaxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxIpRequests"></a>

```typescript
public resetMaxIpRequests(): void
```

##### `resetMaxUserRequests` <a name="resetMaxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetMaxUserRequests"></a>

```typescript
public resetMaxUserRequests(): void
```

##### `resetPeriodUnit` <a name="resetPeriodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetPeriodUnit"></a>

```typescript
public resetPeriodUnit(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUserThrottles` <a name="resetUserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.resetUserThrottles"></a>

```typescript
public resetUserThrottles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ApigwThrottlingPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApigwThrottlingPolicyV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApigwThrottlingPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigwThrottlingPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles">appThrottles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles">userThrottles</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput">appThrottlesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput">maxApiRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput">maxAppRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput">maxIpRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput">maxUserRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput">periodUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput">userThrottlesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests">maxAppRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests">maxIpRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests">maxUserRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit">periodUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appThrottles`<sup>Required</sup> <a name="appThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottles"></a>

```typescript
public readonly appThrottles: ApigwThrottlingPolicyV2AppThrottlesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList">ApigwThrottlingPolicyV2AppThrottlesList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `userThrottles`<sup>Required</sup> <a name="userThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottles"></a>

```typescript
public readonly userThrottles: ApigwThrottlingPolicyV2UserThrottlesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList">ApigwThrottlingPolicyV2UserThrottlesList</a>

---

##### `appThrottlesInput`<sup>Optional</sup> <a name="appThrottlesInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.appThrottlesInput"></a>

```typescript
public readonly appThrottlesInput: IResolvable | ApigwThrottlingPolicyV2AppThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `maxApiRequestsInput`<sup>Optional</sup> <a name="maxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequestsInput"></a>

```typescript
public readonly maxApiRequestsInput: number;
```

- *Type:* number

---

##### `maxAppRequestsInput`<sup>Optional</sup> <a name="maxAppRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequestsInput"></a>

```typescript
public readonly maxAppRequestsInput: number;
```

- *Type:* number

---

##### `maxIpRequestsInput`<sup>Optional</sup> <a name="maxIpRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequestsInput"></a>

```typescript
public readonly maxIpRequestsInput: number;
```

- *Type:* number

---

##### `maxUserRequestsInput`<sup>Optional</sup> <a name="maxUserRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequestsInput"></a>

```typescript
public readonly maxUserRequestsInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `periodUnitInput`<sup>Optional</sup> <a name="periodUnitInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnitInput"></a>

```typescript
public readonly periodUnitInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `userThrottlesInput`<sup>Optional</sup> <a name="userThrottlesInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.userThrottlesInput"></a>

```typescript
public readonly userThrottlesInput: IResolvable | ApigwThrottlingPolicyV2UserThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

---

##### `maxAppRequests`<sup>Required</sup> <a name="maxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxAppRequests"></a>

```typescript
public readonly maxAppRequests: number;
```

- *Type:* number

---

##### `maxIpRequests`<sup>Required</sup> <a name="maxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxIpRequests"></a>

```typescript
public readonly maxIpRequests: number;
```

- *Type:* number

---

##### `maxUserRequests`<sup>Required</sup> <a name="maxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.maxUserRequests"></a>

```typescript
public readonly maxUserRequests: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `periodUnit`<sup>Required</sup> <a name="periodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.periodUnit"></a>

```typescript
public readonly periodUnit: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigwThrottlingPolicyV2AppThrottles <a name="ApigwThrottlingPolicyV2AppThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const apigwThrottlingPolicyV2AppThrottles: apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId">throttlingObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `throttlingObjectId`<sup>Required</sup> <a name="throttlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles.property.throttlingObjectId"></a>

```typescript
public readonly throttlingObjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

### ApigwThrottlingPolicyV2Config <a name="ApigwThrottlingPolicyV2Config" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const apigwThrottlingPolicyV2Config: apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles">appThrottles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]</code> | app_throttles block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests">maxAppRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests">maxIpRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests">maxUserRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit">periodUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles">userThrottles</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]</code> | user_throttles block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#instance_id ApigwThrottlingPolicyV2#instance_id}.

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#name ApigwThrottlingPolicyV2#name}.

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#period ApigwThrottlingPolicyV2#period}.

---

##### `appThrottles`<sup>Optional</sup> <a name="appThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.appThrottles"></a>

```typescript
public readonly appThrottles: IResolvable | ApigwThrottlingPolicyV2AppThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]

app_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#app_throttles ApigwThrottlingPolicyV2#app_throttles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#description ApigwThrottlingPolicyV2#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#id ApigwThrottlingPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAppRequests`<sup>Optional</sup> <a name="maxAppRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxAppRequests"></a>

```typescript
public readonly maxAppRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_app_requests ApigwThrottlingPolicyV2#max_app_requests}.

---

##### `maxIpRequests`<sup>Optional</sup> <a name="maxIpRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxIpRequests"></a>

```typescript
public readonly maxIpRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_ip_requests ApigwThrottlingPolicyV2#max_ip_requests}.

---

##### `maxUserRequests`<sup>Optional</sup> <a name="maxUserRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.maxUserRequests"></a>

```typescript
public readonly maxUserRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_user_requests ApigwThrottlingPolicyV2#max_user_requests}.

---

##### `periodUnit`<sup>Optional</sup> <a name="periodUnit" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.periodUnit"></a>

```typescript
public readonly periodUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#period_unit ApigwThrottlingPolicyV2#period_unit}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#type ApigwThrottlingPolicyV2#type}.

---

##### `userThrottles`<sup>Optional</sup> <a name="userThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2Config.property.userThrottles"></a>

```typescript
public readonly userThrottles: IResolvable | ApigwThrottlingPolicyV2UserThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]

user_throttles block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#user_throttles ApigwThrottlingPolicyV2#user_throttles}

---

### ApigwThrottlingPolicyV2UserThrottles <a name="ApigwThrottlingPolicyV2UserThrottles" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const apigwThrottlingPolicyV2UserThrottles: apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId">throttlingObjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}. |

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#max_api_requests ApigwThrottlingPolicyV2#max_api_requests}.

---

##### `throttlingObjectId`<sup>Required</sup> <a name="throttlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles.property.throttlingObjectId"></a>

```typescript
public readonly throttlingObjectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.54/docs/resources/apigw_throttling_policy_v2#throttling_object_id ApigwThrottlingPolicyV2#throttling_object_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigwThrottlingPolicyV2AppThrottlesList <a name="ApigwThrottlingPolicyV2AppThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get"></a>

```typescript
public get(index: number): ApigwThrottlingPolicyV2AppThrottlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwThrottlingPolicyV2AppThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>[]

---


### ApigwThrottlingPolicyV2AppThrottlesOutputReference <a name="ApigwThrottlingPolicyV2AppThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName">throttlingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput">maxApiRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput">throttlingObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId">throttlingObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `throttlingObjectName`<sup>Required</sup> <a name="throttlingObjectName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectName"></a>

```typescript
public readonly throttlingObjectName: string;
```

- *Type:* string

---

##### `maxApiRequestsInput`<sup>Optional</sup> <a name="maxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequestsInput"></a>

```typescript
public readonly maxApiRequestsInput: number;
```

- *Type:* number

---

##### `throttlingObjectIdInput`<sup>Optional</sup> <a name="throttlingObjectIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```typescript
public readonly throttlingObjectIdInput: string;
```

- *Type:* string

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

---

##### `throttlingObjectId`<sup>Required</sup> <a name="throttlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.throttlingObjectId"></a>

```typescript
public readonly throttlingObjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwThrottlingPolicyV2AppThrottles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2AppThrottles">ApigwThrottlingPolicyV2AppThrottles</a>

---


### ApigwThrottlingPolicyV2UserThrottlesList <a name="ApigwThrottlingPolicyV2UserThrottlesList" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get"></a>

```typescript
public get(index: number): ApigwThrottlingPolicyV2UserThrottlesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwThrottlingPolicyV2UserThrottles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>[]

---


### ApigwThrottlingPolicyV2UserThrottlesOutputReference <a name="ApigwThrottlingPolicyV2UserThrottlesOutputReference" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer"></a>

```typescript
import { apigwThrottlingPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName">throttlingObjectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput">maxApiRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput">throttlingObjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests">maxApiRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId">throttlingObjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `throttlingObjectName`<sup>Required</sup> <a name="throttlingObjectName" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectName"></a>

```typescript
public readonly throttlingObjectName: string;
```

- *Type:* string

---

##### `maxApiRequestsInput`<sup>Optional</sup> <a name="maxApiRequestsInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequestsInput"></a>

```typescript
public readonly maxApiRequestsInput: number;
```

- *Type:* number

---

##### `throttlingObjectIdInput`<sup>Optional</sup> <a name="throttlingObjectIdInput" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectIdInput"></a>

```typescript
public readonly throttlingObjectIdInput: string;
```

- *Type:* string

---

##### `maxApiRequests`<sup>Required</sup> <a name="maxApiRequests" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.maxApiRequests"></a>

```typescript
public readonly maxApiRequests: number;
```

- *Type:* number

---

##### `throttlingObjectId`<sup>Required</sup> <a name="throttlingObjectId" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.throttlingObjectId"></a>

```typescript
public readonly throttlingObjectId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottlesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ApigwThrottlingPolicyV2UserThrottles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.apigwThrottlingPolicyV2.ApigwThrottlingPolicyV2UserThrottles">ApigwThrottlingPolicyV2UserThrottles</a>

---



