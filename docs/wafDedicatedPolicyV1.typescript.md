# `wafDedicatedPolicyV1` Submodule <a name="`wafDedicatedPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafDedicatedPolicyV1 <a name="WafDedicatedPolicyV1" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1 opentelekomcloud_waf_dedicated_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPolicyV1.WafDedicatedPolicyV1(scope: Construct, id: string, config: WafDedicatedPolicyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config">WafDedicatedPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection">resetDeepInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection">resetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection">resetHeaderInspection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel">resetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode">resetProtectionMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck">resetShiroDecryptionCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOptions` <a name="putOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions"></a>

```typescript
public putOptions(value: IResolvable | WafDedicatedPolicyV1Options[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putOptions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts"></a>

```typescript
public putTimeouts(value: WafDedicatedPolicyV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

---

##### `resetDeepInspection` <a name="resetDeepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetDeepInspection"></a>

```typescript
public resetDeepInspection(): void
```

##### `resetFullDetection` <a name="resetFullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetFullDetection"></a>

```typescript
public resetFullDetection(): void
```

##### `resetHeaderInspection` <a name="resetHeaderInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetHeaderInspection"></a>

```typescript
public resetHeaderInspection(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLevel` <a name="resetLevel" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetLevel"></a>

```typescript
public resetLevel(): void
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetOptions"></a>

```typescript
public resetOptions(): void
```

##### `resetProtectionMode` <a name="resetProtectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetProtectionMode"></a>

```typescript
public resetProtectionMode(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetShiroDecryptionCheck` <a name="resetShiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetShiroDecryptionCheck"></a>

```typescript
public resetShiroDecryptionCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a WafDedicatedPolicyV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WafDedicatedPolicyV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WafDedicatedPolicyV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the WafDedicatedPolicyV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt">createdAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options">options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput">deepInspectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput">fullDetectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput">headerInspectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput">levelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput">optionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput">protectionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput">shiroDecryptionCheckInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection">deepInspection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection">fullDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection">headerInspection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level">level</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode">protectionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck">shiroDecryptionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.createdAt"></a>

```typescript
public readonly createdAt: number;
```

- *Type:* number

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.options"></a>

```typescript
public readonly options: WafDedicatedPolicyV1OptionsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList">WafDedicatedPolicyV1OptionsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedPolicyV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference">WafDedicatedPolicyV1TimeoutsOutputReference</a>

---

##### `deepInspectionInput`<sup>Optional</sup> <a name="deepInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspectionInput"></a>

```typescript
public readonly deepInspectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fullDetectionInput`<sup>Optional</sup> <a name="fullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetectionInput"></a>

```typescript
public readonly fullDetectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInspectionInput`<sup>Optional</sup> <a name="headerInspectionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspectionInput"></a>

```typescript
public readonly headerInspectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `levelInput`<sup>Optional</sup> <a name="levelInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.levelInput"></a>

```typescript
public readonly levelInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.optionsInput"></a>

```typescript
public readonly optionsInput: IResolvable | WafDedicatedPolicyV1Options[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]

---

##### `protectionModeInput`<sup>Optional</sup> <a name="protectionModeInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionModeInput"></a>

```typescript
public readonly protectionModeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `shiroDecryptionCheckInput`<sup>Optional</sup> <a name="shiroDecryptionCheckInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheckInput"></a>

```typescript
public readonly shiroDecryptionCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WafDedicatedPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

---

##### `deepInspection`<sup>Required</sup> <a name="deepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.deepInspection"></a>

```typescript
public readonly deepInspection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `fullDetection`<sup>Required</sup> <a name="fullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.fullDetection"></a>

```typescript
public readonly fullDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `headerInspection`<sup>Required</sup> <a name="headerInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.headerInspection"></a>

```typescript
public readonly headerInspection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protectionMode`<sup>Required</sup> <a name="protectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `shiroDecryptionCheck`<sup>Required</sup> <a name="shiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.shiroDecryptionCheck"></a>

```typescript
public readonly shiroDecryptionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafDedicatedPolicyV1Config <a name="WafDedicatedPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPolicyV1Config: wafDedicatedPolicyV1.WafDedicatedPolicyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection">deepInspection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection">fullDetection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection">headerInspection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level">level</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options">options</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]</code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode">protectionMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck">shiroDecryptionCheck</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#name WafDedicatedPolicyV1#name}.

---

##### `deepInspection`<sup>Optional</sup> <a name="deepInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.deepInspection"></a>

```typescript
public readonly deepInspection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#deep_inspection WafDedicatedPolicyV1#deep_inspection}.

---

##### `fullDetection`<sup>Optional</sup> <a name="fullDetection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.fullDetection"></a>

```typescript
public readonly fullDetection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#full_detection WafDedicatedPolicyV1#full_detection}.

---

##### `headerInspection`<sup>Optional</sup> <a name="headerInspection" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.headerInspection"></a>

```typescript
public readonly headerInspection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#header_inspection WafDedicatedPolicyV1#header_inspection}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#id WafDedicatedPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `level`<sup>Optional</sup> <a name="level" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.level"></a>

```typescript
public readonly level: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#level WafDedicatedPolicyV1#level}.

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.options"></a>

```typescript
public readonly options: IResolvable | WafDedicatedPolicyV1Options[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#options WafDedicatedPolicyV1#options}

---

##### `protectionMode`<sup>Optional</sup> <a name="protectionMode" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.protectionMode"></a>

```typescript
public readonly protectionMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#protection_mode WafDedicatedPolicyV1#protection_mode}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#region WafDedicatedPolicyV1#region}.

---

##### `shiroDecryptionCheck`<sup>Optional</sup> <a name="shiroDecryptionCheck" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.shiroDecryptionCheck"></a>

```typescript
public readonly shiroDecryptionCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#shiro_decryption_check WafDedicatedPolicyV1#shiro_decryption_check}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: WafDedicatedPolicyV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#timeouts WafDedicatedPolicyV1#timeouts}

---

### WafDedicatedPolicyV1Options <a name="WafDedicatedPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPolicyV1Options: wafDedicatedPolicyV1.WafDedicatedPolicyV1Options = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler">antiCrawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage">antiLeakage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper">antiTamper</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist">blacklist</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc">cc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common">common</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler">crawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine">crawlerEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther">crawlerOther</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner">crawlerScanner</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript">crawlerScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction">followedAction</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl">geolocationAccessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy">privacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack">webAttack</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell">webShell</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}. |

---

##### `antiCrawler`<sup>Optional</sup> <a name="antiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiCrawler"></a>

```typescript
public readonly antiCrawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_crawler WafDedicatedPolicyV1#anti_crawler}.

---

##### `antiLeakage`<sup>Optional</sup> <a name="antiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiLeakage"></a>

```typescript
public readonly antiLeakage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_leakage WafDedicatedPolicyV1#anti_leakage}.

---

##### `antiTamper`<sup>Optional</sup> <a name="antiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.antiTamper"></a>

```typescript
public readonly antiTamper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#anti_tamper WafDedicatedPolicyV1#anti_tamper}.

---

##### `blacklist`<sup>Optional</sup> <a name="blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.blacklist"></a>

```typescript
public readonly blacklist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#blacklist WafDedicatedPolicyV1#blacklist}.

---

##### `cc`<sup>Optional</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.cc"></a>

```typescript
public readonly cc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#cc WafDedicatedPolicyV1#cc}.

---

##### `common`<sup>Optional</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.common"></a>

```typescript
public readonly common: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#common WafDedicatedPolicyV1#common}.

---

##### `crawler`<sup>Optional</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawler"></a>

```typescript
public readonly crawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler WafDedicatedPolicyV1#crawler}.

---

##### `crawlerEngine`<sup>Optional</sup> <a name="crawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerEngine"></a>

```typescript
public readonly crawlerEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_engine WafDedicatedPolicyV1#crawler_engine}.

---

##### `crawlerOther`<sup>Optional</sup> <a name="crawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerOther"></a>

```typescript
public readonly crawlerOther: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_other WafDedicatedPolicyV1#crawler_other}.

---

##### `crawlerScanner`<sup>Optional</sup> <a name="crawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScanner"></a>

```typescript
public readonly crawlerScanner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_scanner WafDedicatedPolicyV1#crawler_scanner}.

---

##### `crawlerScript`<sup>Optional</sup> <a name="crawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.crawlerScript"></a>

```typescript
public readonly crawlerScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#crawler_script WafDedicatedPolicyV1#crawler_script}.

---

##### `custom`<sup>Optional</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#custom WafDedicatedPolicyV1#custom}.

---

##### `followedAction`<sup>Optional</sup> <a name="followedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.followedAction"></a>

```typescript
public readonly followedAction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#followed_action WafDedicatedPolicyV1#followed_action}.

---

##### `geolocationAccessControl`<sup>Optional</sup> <a name="geolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.geolocationAccessControl"></a>

```typescript
public readonly geolocationAccessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#geolocation_access_control WafDedicatedPolicyV1#geolocation_access_control}.

---

##### `ignore`<sup>Optional</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#ignore WafDedicatedPolicyV1#ignore}.

---

##### `privacy`<sup>Optional</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.privacy"></a>

```typescript
public readonly privacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#privacy WafDedicatedPolicyV1#privacy}.

---

##### `webAttack`<sup>Optional</sup> <a name="webAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webAttack"></a>

```typescript
public readonly webAttack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#web_attack WafDedicatedPolicyV1#web_attack}.

---

##### `webShell`<sup>Optional</sup> <a name="webShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options.property.webShell"></a>

```typescript
public readonly webShell: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#web_shell WafDedicatedPolicyV1#web_shell}.

---

### WafDedicatedPolicyV1Timeouts <a name="WafDedicatedPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const wafDedicatedPolicyV1Timeouts: wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#create WafDedicatedPolicyV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.17/docs/resources/waf_dedicated_policy_v1#delete WafDedicatedPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafDedicatedPolicyV1OptionsList <a name="WafDedicatedPolicyV1OptionsList" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get"></a>

```typescript
public get(index: number): WafDedicatedPolicyV1OptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPolicyV1Options[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>[]

---


### WafDedicatedPolicyV1OptionsOutputReference <a name="WafDedicatedPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler">resetAntiCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage">resetAntiLeakage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper">resetAntiTamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist">resetBlacklist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc">resetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon">resetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler">resetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine">resetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther">resetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner">resetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript">resetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom">resetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction">resetFollowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl">resetGeolocationAccessControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore">resetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy">resetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack">resetWebAttack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell">resetWebShell</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAntiCrawler` <a name="resetAntiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiCrawler"></a>

```typescript
public resetAntiCrawler(): void
```

##### `resetAntiLeakage` <a name="resetAntiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiLeakage"></a>

```typescript
public resetAntiLeakage(): void
```

##### `resetAntiTamper` <a name="resetAntiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetAntiTamper"></a>

```typescript
public resetAntiTamper(): void
```

##### `resetBlacklist` <a name="resetBlacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetBlacklist"></a>

```typescript
public resetBlacklist(): void
```

##### `resetCc` <a name="resetCc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCc"></a>

```typescript
public resetCc(): void
```

##### `resetCommon` <a name="resetCommon" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCommon"></a>

```typescript
public resetCommon(): void
```

##### `resetCrawler` <a name="resetCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawler"></a>

```typescript
public resetCrawler(): void
```

##### `resetCrawlerEngine` <a name="resetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```typescript
public resetCrawlerEngine(): void
```

##### `resetCrawlerOther` <a name="resetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```typescript
public resetCrawlerOther(): void
```

##### `resetCrawlerScanner` <a name="resetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```typescript
public resetCrawlerScanner(): void
```

##### `resetCrawlerScript` <a name="resetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```typescript
public resetCrawlerScript(): void
```

##### `resetCustom` <a name="resetCustom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetCustom"></a>

```typescript
public resetCustom(): void
```

##### `resetFollowedAction` <a name="resetFollowedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetFollowedAction"></a>

```typescript
public resetFollowedAction(): void
```

##### `resetGeolocationAccessControl` <a name="resetGeolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetGeolocationAccessControl"></a>

```typescript
public resetGeolocationAccessControl(): void
```

##### `resetIgnore` <a name="resetIgnore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetIgnore"></a>

```typescript
public resetIgnore(): void
```

##### `resetPrivacy` <a name="resetPrivacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetPrivacy"></a>

```typescript
public resetPrivacy(): void
```

##### `resetWebAttack` <a name="resetWebAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebAttack"></a>

```typescript
public resetWebAttack(): void
```

##### `resetWebShell` <a name="resetWebShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.resetWebShell"></a>

```typescript
public resetWebShell(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable">botEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise">precise</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput">antiCrawlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput">antiLeakageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput">antiTamperInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput">blacklistInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput">ccInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput">commonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput">crawlerEngineInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput">crawlerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput">crawlerOtherInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput">crawlerScannerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput">crawlerScriptInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput">customInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput">followedActionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput">geolocationAccessControlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput">ignoreInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput">privacyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput">webAttackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput">webShellInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler">antiCrawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage">antiLeakage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper">antiTamper</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist">blacklist</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc">cc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common">common</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler">crawler</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine">crawlerEngine</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther">crawlerOther</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner">crawlerScanner</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript">crawlerScript</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom">custom</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction">followedAction</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl">geolocationAccessControl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore">ignore</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy">privacy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack">webAttack</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell">webShell</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `botEnable`<sup>Required</sup> <a name="botEnable" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.botEnable"></a>

```typescript
public readonly botEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `precise`<sup>Required</sup> <a name="precise" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.precise"></a>

```typescript
public readonly precise: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `antiCrawlerInput`<sup>Optional</sup> <a name="antiCrawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawlerInput"></a>

```typescript
public readonly antiCrawlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiLeakageInput`<sup>Optional</sup> <a name="antiLeakageInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakageInput"></a>

```typescript
public readonly antiLeakageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiTamperInput`<sup>Optional</sup> <a name="antiTamperInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamperInput"></a>

```typescript
public readonly antiTamperInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blacklistInput`<sup>Optional</sup> <a name="blacklistInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklistInput"></a>

```typescript
public readonly blacklistInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ccInput`<sup>Optional</sup> <a name="ccInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ccInput"></a>

```typescript
public readonly ccInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `commonInput`<sup>Optional</sup> <a name="commonInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.commonInput"></a>

```typescript
public readonly commonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerEngineInput`<sup>Optional</sup> <a name="crawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```typescript
public readonly crawlerEngineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerInput`<sup>Optional</sup> <a name="crawlerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```typescript
public readonly crawlerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerOtherInput`<sup>Optional</sup> <a name="crawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```typescript
public readonly crawlerOtherInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScannerInput`<sup>Optional</sup> <a name="crawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```typescript
public readonly crawlerScannerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScriptInput`<sup>Optional</sup> <a name="crawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```typescript
public readonly crawlerScriptInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `customInput`<sup>Optional</sup> <a name="customInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.customInput"></a>

```typescript
public readonly customInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `followedActionInput`<sup>Optional</sup> <a name="followedActionInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedActionInput"></a>

```typescript
public readonly followedActionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geolocationAccessControlInput`<sup>Optional</sup> <a name="geolocationAccessControlInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControlInput"></a>

```typescript
public readonly geolocationAccessControlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignoreInput`<sup>Optional</sup> <a name="ignoreInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```typescript
public readonly ignoreInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacyInput`<sup>Optional</sup> <a name="privacyInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacyInput"></a>

```typescript
public readonly privacyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webAttackInput`<sup>Optional</sup> <a name="webAttackInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttackInput"></a>

```typescript
public readonly webAttackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webShellInput`<sup>Optional</sup> <a name="webShellInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShellInput"></a>

```typescript
public readonly webShellInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiCrawler`<sup>Required</sup> <a name="antiCrawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiCrawler"></a>

```typescript
public readonly antiCrawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiLeakage`<sup>Required</sup> <a name="antiLeakage" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiLeakage"></a>

```typescript
public readonly antiLeakage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `antiTamper`<sup>Required</sup> <a name="antiTamper" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.antiTamper"></a>

```typescript
public readonly antiTamper: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `blacklist`<sup>Required</sup> <a name="blacklist" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.blacklist"></a>

```typescript
public readonly blacklist: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `cc`<sup>Required</sup> <a name="cc" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.cc"></a>

```typescript
public readonly cc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.common"></a>

```typescript
public readonly common: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawler`<sup>Required</sup> <a name="crawler" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawler"></a>

```typescript
public readonly crawler: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerEngine`<sup>Required</sup> <a name="crawlerEngine" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```typescript
public readonly crawlerEngine: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerOther`<sup>Required</sup> <a name="crawlerOther" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```typescript
public readonly crawlerOther: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScanner`<sup>Required</sup> <a name="crawlerScanner" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```typescript
public readonly crawlerScanner: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `crawlerScript`<sup>Required</sup> <a name="crawlerScript" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```typescript
public readonly crawlerScript: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `custom`<sup>Required</sup> <a name="custom" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.custom"></a>

```typescript
public readonly custom: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `followedAction`<sup>Required</sup> <a name="followedAction" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.followedAction"></a>

```typescript
public readonly followedAction: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `geolocationAccessControl`<sup>Required</sup> <a name="geolocationAccessControl" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.geolocationAccessControl"></a>

```typescript
public readonly geolocationAccessControl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `ignore`<sup>Required</sup> <a name="ignore" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.ignore"></a>

```typescript
public readonly ignore: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `privacy`<sup>Required</sup> <a name="privacy" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.privacy"></a>

```typescript
public readonly privacy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webAttack`<sup>Required</sup> <a name="webAttack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webAttack"></a>

```typescript
public readonly webAttack: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webShell`<sup>Required</sup> <a name="webShell" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.webShell"></a>

```typescript
public readonly webShell: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1OptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPolicyV1Options;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Options">WafDedicatedPolicyV1Options</a>

---


### WafDedicatedPolicyV1TimeoutsOutputReference <a name="WafDedicatedPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { wafDedicatedPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WafDedicatedPolicyV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.wafDedicatedPolicyV1.WafDedicatedPolicyV1Timeouts">WafDedicatedPolicyV1Timeouts</a>

---



