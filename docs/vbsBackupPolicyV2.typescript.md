# `vbsBackupPolicyV2` Submodule <a name="`vbsBackupPolicyV2` Submodule" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VbsBackupPolicyV2 <a name="VbsBackupPolicyV2" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2 opentelekomcloud_vbs_backup_policy_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vbsBackupPolicyV2.VbsBackupPolicyV2(scope: Construct, id: string, config: VbsBackupPolicyV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config">VbsBackupPolicyV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config">VbsBackupPolicyV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency">resetFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay">resetRententionDay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum">resetRententionNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency">resetWeekFrequency</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags"></a>

```typescript
public putTags(value: IResolvable | VbsBackupPolicyV2Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTags.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts"></a>

```typescript
public putTimeouts(value: VbsBackupPolicyV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

---

##### `resetFrequency` <a name="resetFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetFrequency"></a>

```typescript
public resetFrequency(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRententionDay` <a name="resetRententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionDay"></a>

```typescript
public resetRententionDay(): void
```

##### `resetRententionNum` <a name="resetRententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetRententionNum"></a>

```typescript
public resetRententionNum(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWeekFrequency` <a name="resetWeekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.resetWeekFrequency"></a>

```typescript
public resetWeekFrequency(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VbsBackupPolicyV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VbsBackupPolicyV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VbsBackupPolicyV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VbsBackupPolicyV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount">policyResourceCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags">tags</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput">frequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput">rententionDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput">rententionNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput">resourcesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput">retainFirstBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput">startTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput">tagsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput">weekFrequencyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency">frequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay">rententionDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum">rententionNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources">resources</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup">retainFirstBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency">weekFrequency</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `policyResourceCount`<sup>Required</sup> <a name="policyResourceCount" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.policyResourceCount"></a>

```typescript
public readonly policyResourceCount: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tags"></a>

```typescript
public readonly tags: VbsBackupPolicyV2TagsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList">VbsBackupPolicyV2TagsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeouts"></a>

```typescript
public readonly timeouts: VbsBackupPolicyV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference">VbsBackupPolicyV2TimeoutsOutputReference</a>

---

##### `frequencyInput`<sup>Optional</sup> <a name="frequencyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequencyInput"></a>

```typescript
public readonly frequencyInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rententionDayInput`<sup>Optional</sup> <a name="rententionDayInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDayInput"></a>

```typescript
public readonly rententionDayInput: number;
```

- *Type:* number

---

##### `rententionNumInput`<sup>Optional</sup> <a name="rententionNumInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNumInput"></a>

```typescript
public readonly rententionNumInput: number;
```

- *Type:* number

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: string[];
```

- *Type:* string[]

---

##### `retainFirstBackupInput`<sup>Optional</sup> <a name="retainFirstBackupInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackupInput"></a>

```typescript
public readonly retainFirstBackupInput: string;
```

- *Type:* string

---

##### `startTimeInput`<sup>Optional</sup> <a name="startTimeInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTimeInput"></a>

```typescript
public readonly startTimeInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | VbsBackupPolicyV2Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | VbsBackupPolicyV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

---

##### `weekFrequencyInput`<sup>Optional</sup> <a name="weekFrequencyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequencyInput"></a>

```typescript
public readonly weekFrequencyInput: string[];
```

- *Type:* string[]

---

##### `frequency`<sup>Required</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rententionDay`<sup>Required</sup> <a name="rententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionDay"></a>

```typescript
public readonly rententionDay: number;
```

- *Type:* number

---

##### `rententionNum`<sup>Required</sup> <a name="rententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.rententionNum"></a>

```typescript
public readonly rententionNum: number;
```

- *Type:* number

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

---

##### `retainFirstBackup`<sup>Required</sup> <a name="retainFirstBackup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.retainFirstBackup"></a>

```typescript
public readonly retainFirstBackup: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `weekFrequency`<sup>Required</sup> <a name="weekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.weekFrequency"></a>

```typescript
public readonly weekFrequency: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VbsBackupPolicyV2Config <a name="VbsBackupPolicyV2Config" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vbsBackupPolicyV2Config: vbsBackupPolicyV2.VbsBackupPolicyV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup">retainFirstBackup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime">startTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency">frequency</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay">rententionDay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum">rententionNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources">resources</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags">tags</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]</code> | tags block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency">weekFrequency</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#name VbsBackupPolicyV2#name}.

---

##### `retainFirstBackup`<sup>Required</sup> <a name="retainFirstBackup" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.retainFirstBackup"></a>

```typescript
public readonly retainFirstBackup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#retain_first_backup VbsBackupPolicyV2#retain_first_backup}.

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#start_time VbsBackupPolicyV2#start_time}.

---

##### `frequency`<sup>Optional</sup> <a name="frequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.frequency"></a>

```typescript
public readonly frequency: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#frequency VbsBackupPolicyV2#frequency}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#id VbsBackupPolicyV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#region VbsBackupPolicyV2#region}.

---

##### `rententionDay`<sup>Optional</sup> <a name="rententionDay" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionDay"></a>

```typescript
public readonly rententionDay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#rentention_day VbsBackupPolicyV2#rentention_day}.

---

##### `rententionNum`<sup>Optional</sup> <a name="rententionNum" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.rententionNum"></a>

```typescript
public readonly rententionNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#rentention_num VbsBackupPolicyV2#rentention_num}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.resources"></a>

```typescript
public readonly resources: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#resources VbsBackupPolicyV2#resources}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#status VbsBackupPolicyV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | VbsBackupPolicyV2Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]

tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#tags VbsBackupPolicyV2#tags}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: VbsBackupPolicyV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#timeouts VbsBackupPolicyV2#timeouts}

---

##### `weekFrequency`<sup>Optional</sup> <a name="weekFrequency" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Config.property.weekFrequency"></a>

```typescript
public readonly weekFrequency: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#week_frequency VbsBackupPolicyV2#week_frequency}.

---

### VbsBackupPolicyV2Tags <a name="VbsBackupPolicyV2Tags" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vbsBackupPolicyV2Tags: vbsBackupPolicyV2.VbsBackupPolicyV2Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#key VbsBackupPolicyV2#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#value VbsBackupPolicyV2#value}.

---

### VbsBackupPolicyV2Timeouts <a name="VbsBackupPolicyV2Timeouts" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

const vbsBackupPolicyV2Timeouts: vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#create VbsBackupPolicyV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/resources/vbs_backup_policy_v2#delete VbsBackupPolicyV2#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### VbsBackupPolicyV2TagsList <a name="VbsBackupPolicyV2TagsList" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vbsBackupPolicyV2.VbsBackupPolicyV2TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get"></a>

```typescript
public get(index: number): VbsBackupPolicyV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VbsBackupPolicyV2Tags[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>[]

---


### VbsBackupPolicyV2TagsOutputReference <a name="VbsBackupPolicyV2TagsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VbsBackupPolicyV2Tags;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Tags">VbsBackupPolicyV2Tags</a>

---


### VbsBackupPolicyV2TimeoutsOutputReference <a name="VbsBackupPolicyV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { vbsBackupPolicyV2 } from '@cdktf/provider-opentelekomcloud'

new vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | VbsBackupPolicyV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.vbsBackupPolicyV2.VbsBackupPolicyV2Timeouts">VbsBackupPolicyV2Timeouts</a>

---



