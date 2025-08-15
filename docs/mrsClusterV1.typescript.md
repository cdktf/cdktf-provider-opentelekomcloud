# `mrsClusterV1` Submodule <a name="`mrsClusterV1` Submodule" id="@cdktf/provider-opentelekomcloud.mrsClusterV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MrsClusterV1 <a name="MrsClusterV1" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1 opentelekomcloud_mrs_cluster_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1(scope: Construct, id: string, config: MrsClusterV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config">MrsClusterV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs">putAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts">putBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList">putComponentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs">resetAddJobs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts">resetBootstrapScripts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret">resetClusterAdminSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType">resetClusterType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount">resetCoreDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize">resetCoreDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType">resetCoreDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection">resetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount">resetMasterDataVolumeCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize">resetMasterDataVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType">resetMasterDataVolumeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAddJobs` <a name="putAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs"></a>

```typescript
public putAddJobs(value: IResolvable | MrsClusterV1AddJobs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putAddJobs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]

---

##### `putBootstrapScripts` <a name="putBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts"></a>

```typescript
public putBootstrapScripts(value: IResolvable | MrsClusterV1BootstrapScripts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putBootstrapScripts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]

---

##### `putComponentList` <a name="putComponentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList"></a>

```typescript
public putComponentList(value: IResolvable | MrsClusterV1ComponentListStruct[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putComponentList.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts"></a>

```typescript
public putTimeouts(value: MrsClusterV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `resetAddJobs` <a name="resetAddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetAddJobs"></a>

```typescript
public resetAddJobs(): void
```

##### `resetBootstrapScripts` <a name="resetBootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetBootstrapScripts"></a>

```typescript
public resetBootstrapScripts(): void
```

##### `resetClusterAdminSecret` <a name="resetClusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterAdminSecret"></a>

```typescript
public resetClusterAdminSecret(): void
```

##### `resetClusterType` <a name="resetClusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetClusterType"></a>

```typescript
public resetClusterType(): void
```

##### `resetCoreDataVolumeCount` <a name="resetCoreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeCount"></a>

```typescript
public resetCoreDataVolumeCount(): void
```

##### `resetCoreDataVolumeSize` <a name="resetCoreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeSize"></a>

```typescript
public resetCoreDataVolumeSize(): void
```

##### `resetCoreDataVolumeType` <a name="resetCoreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetCoreDataVolumeType"></a>

```typescript
public resetCoreDataVolumeType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogCollection` <a name="resetLogCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetLogCollection"></a>

```typescript
public resetLogCollection(): void
```

##### `resetMasterDataVolumeCount` <a name="resetMasterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeCount"></a>

```typescript
public resetMasterDataVolumeCount(): void
```

##### `resetMasterDataVolumeSize` <a name="resetMasterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeSize"></a>

```typescript
public resetMasterDataVolumeSize(): void
```

##### `resetMasterDataVolumeType` <a name="resetMasterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetMasterDataVolumeType"></a>

```typescript
public resetMasterDataVolumeType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a MrsClusterV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

mrsClusterV1.MrsClusterV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

mrsClusterV1.MrsClusterV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

mrsClusterV1.MrsClusterV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

mrsClusterV1.MrsClusterV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a MrsClusterV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MrsClusterV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MrsClusterV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MrsClusterV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs">addJobs</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName">availableZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts">bootstrapScripts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime">chargingStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId">clusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState">clusterState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList">componentList</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId">coreNodeProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId">coreNodeSpecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt">createAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId">deploymentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo">errorInfo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp">externalAlternateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp">externalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee">fee</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion">hadoopVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp">internalIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp">masterNodeIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId">masterNodeProductId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId">masterNodeSpecId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId">orderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst">privateIpFirst</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark">remark</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId">securityGroupsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId">slaveSecurityGroupsId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt">updateAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc">vnc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput">addJobsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput">availableZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput">billingTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput">bootstrapScriptsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput">clusterAdminSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput">clusterTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput">clusterVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput">componentListInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput">coreDataVolumeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput">coreDataVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput">coreDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput">coreNodeNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput">coreNodeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput">logCollectionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput">masterDataVolumeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput">masterDataVolumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput">masterDataVolumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput">masterNodeNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput">masterNodeSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput">nodePublicCertNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput">safeModeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId">availableZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType">billingType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret">clusterAdminSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType">clusterType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount">coreDataVolumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize">coreDataVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType">coreDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum">coreNodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize">coreNodeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection">logCollection</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount">masterDataVolumeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize">masterDataVolumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType">masterDataVolumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum">masterNodeNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize">masterNodeSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName">nodePublicCertName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode">safeMode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `addJobs`<sup>Required</sup> <a name="addJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobs"></a>

```typescript
public readonly addJobs: MrsClusterV1AddJobsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList">MrsClusterV1AddJobsList</a>

---

##### `availableZoneName`<sup>Required</sup> <a name="availableZoneName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneName"></a>

```typescript
public readonly availableZoneName: string;
```

- *Type:* string

---

##### `bootstrapScripts`<sup>Required</sup> <a name="bootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScripts"></a>

```typescript
public readonly bootstrapScripts: MrsClusterV1BootstrapScriptsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList">MrsClusterV1BootstrapScriptsList</a>

---

##### `chargingStartTime`<sup>Required</sup> <a name="chargingStartTime" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.chargingStartTime"></a>

```typescript
public readonly chargingStartTime: string;
```

- *Type:* string

---

##### `clusterId`<sup>Required</sup> <a name="clusterId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterId"></a>

```typescript
public readonly clusterId: string;
```

- *Type:* string

---

##### `clusterState`<sup>Required</sup> <a name="clusterState" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterState"></a>

```typescript
public readonly clusterState: string;
```

- *Type:* string

---

##### `componentList`<sup>Required</sup> <a name="componentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentList"></a>

```typescript
public readonly componentList: MrsClusterV1ComponentListStructList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList">MrsClusterV1ComponentListStructList</a>

---

##### `coreNodeProductId`<sup>Required</sup> <a name="coreNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeProductId"></a>

```typescript
public readonly coreNodeProductId: string;
```

- *Type:* string

---

##### `coreNodeSpecId`<sup>Required</sup> <a name="coreNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSpecId"></a>

```typescript
public readonly coreNodeSpecId: string;
```

- *Type:* string

---

##### `createAt`<sup>Required</sup> <a name="createAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.createAt"></a>

```typescript
public readonly createAt: string;
```

- *Type:* string

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.deploymentId"></a>

```typescript
public readonly deploymentId: string;
```

- *Type:* string

---

##### `errorInfo`<sup>Required</sup> <a name="errorInfo" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.errorInfo"></a>

```typescript
public readonly errorInfo: string;
```

- *Type:* string

---

##### `externalAlternateIp`<sup>Required</sup> <a name="externalAlternateIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalAlternateIp"></a>

```typescript
public readonly externalAlternateIp: string;
```

- *Type:* string

---

##### `externalIp`<sup>Required</sup> <a name="externalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.externalIp"></a>

```typescript
public readonly externalIp: string;
```

- *Type:* string

---

##### `fee`<sup>Required</sup> <a name="fee" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.fee"></a>

```typescript
public readonly fee: string;
```

- *Type:* string

---

##### `hadoopVersion`<sup>Required</sup> <a name="hadoopVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.hadoopVersion"></a>

```typescript
public readonly hadoopVersion: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalIp`<sup>Required</sup> <a name="internalIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.internalIp"></a>

```typescript
public readonly internalIp: string;
```

- *Type:* string

---

##### `masterNodeIp`<sup>Required</sup> <a name="masterNodeIp" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeIp"></a>

```typescript
public readonly masterNodeIp: string;
```

- *Type:* string

---

##### `masterNodeProductId`<sup>Required</sup> <a name="masterNodeProductId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeProductId"></a>

```typescript
public readonly masterNodeProductId: string;
```

- *Type:* string

---

##### `masterNodeSpecId`<sup>Required</sup> <a name="masterNodeSpecId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSpecId"></a>

```typescript
public readonly masterNodeSpecId: string;
```

- *Type:* string

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.orderId"></a>

```typescript
public readonly orderId: string;
```

- *Type:* string

---

##### `privateIpFirst`<sup>Required</sup> <a name="privateIpFirst" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.privateIpFirst"></a>

```typescript
public readonly privateIpFirst: string;
```

- *Type:* string

---

##### `remark`<sup>Required</sup> <a name="remark" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.remark"></a>

```typescript
public readonly remark: string;
```

- *Type:* string

---

##### `securityGroupsId`<sup>Required</sup> <a name="securityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.securityGroupsId"></a>

```typescript
public readonly securityGroupsId: string;
```

- *Type:* string

---

##### `slaveSecurityGroupsId`<sup>Required</sup> <a name="slaveSecurityGroupsId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.slaveSecurityGroupsId"></a>

```typescript
public readonly slaveSecurityGroupsId: string;
```

- *Type:* string

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeouts"></a>

```typescript
public readonly timeouts: MrsClusterV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference">MrsClusterV1TimeoutsOutputReference</a>

---

##### `updateAt`<sup>Required</sup> <a name="updateAt" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.updateAt"></a>

```typescript
public readonly updateAt: string;
```

- *Type:* string

---

##### `vnc`<sup>Required</sup> <a name="vnc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vnc"></a>

```typescript
public readonly vnc: string;
```

- *Type:* string

---

##### `addJobsInput`<sup>Optional</sup> <a name="addJobsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.addJobsInput"></a>

```typescript
public readonly addJobsInput: IResolvable | MrsClusterV1AddJobs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]

---

##### `availableZoneIdInput`<sup>Optional</sup> <a name="availableZoneIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneIdInput"></a>

```typescript
public readonly availableZoneIdInput: string;
```

- *Type:* string

---

##### `billingTypeInput`<sup>Optional</sup> <a name="billingTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingTypeInput"></a>

```typescript
public readonly billingTypeInput: number;
```

- *Type:* number

---

##### `bootstrapScriptsInput`<sup>Optional</sup> <a name="bootstrapScriptsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.bootstrapScriptsInput"></a>

```typescript
public readonly bootstrapScriptsInput: IResolvable | MrsClusterV1BootstrapScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]

---

##### `clusterAdminSecretInput`<sup>Optional</sup> <a name="clusterAdminSecretInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecretInput"></a>

```typescript
public readonly clusterAdminSecretInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `clusterTypeInput`<sup>Optional</sup> <a name="clusterTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterTypeInput"></a>

```typescript
public readonly clusterTypeInput: number;
```

- *Type:* number

---

##### `clusterVersionInput`<sup>Optional</sup> <a name="clusterVersionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersionInput"></a>

```typescript
public readonly clusterVersionInput: string;
```

- *Type:* string

---

##### `componentListInput`<sup>Optional</sup> <a name="componentListInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.componentListInput"></a>

```typescript
public readonly componentListInput: IResolvable | MrsClusterV1ComponentListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]

---

##### `coreDataVolumeCountInput`<sup>Optional</sup> <a name="coreDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCountInput"></a>

```typescript
public readonly coreDataVolumeCountInput: number;
```

- *Type:* number

---

##### `coreDataVolumeSizeInput`<sup>Optional</sup> <a name="coreDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSizeInput"></a>

```typescript
public readonly coreDataVolumeSizeInput: number;
```

- *Type:* number

---

##### `coreDataVolumeTypeInput`<sup>Optional</sup> <a name="coreDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeTypeInput"></a>

```typescript
public readonly coreDataVolumeTypeInput: string;
```

- *Type:* string

---

##### `coreNodeNumInput`<sup>Optional</sup> <a name="coreNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNumInput"></a>

```typescript
public readonly coreNodeNumInput: number;
```

- *Type:* number

---

##### `coreNodeSizeInput`<sup>Optional</sup> <a name="coreNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSizeInput"></a>

```typescript
public readonly coreNodeSizeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logCollectionInput`<sup>Optional</sup> <a name="logCollectionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollectionInput"></a>

```typescript
public readonly logCollectionInput: number;
```

- *Type:* number

---

##### `masterDataVolumeCountInput`<sup>Optional</sup> <a name="masterDataVolumeCountInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCountInput"></a>

```typescript
public readonly masterDataVolumeCountInput: number;
```

- *Type:* number

---

##### `masterDataVolumeSizeInput`<sup>Optional</sup> <a name="masterDataVolumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSizeInput"></a>

```typescript
public readonly masterDataVolumeSizeInput: number;
```

- *Type:* number

---

##### `masterDataVolumeTypeInput`<sup>Optional</sup> <a name="masterDataVolumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeTypeInput"></a>

```typescript
public readonly masterDataVolumeTypeInput: string;
```

- *Type:* string

---

##### `masterNodeNumInput`<sup>Optional</sup> <a name="masterNodeNumInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNumInput"></a>

```typescript
public readonly masterNodeNumInput: number;
```

- *Type:* number

---

##### `masterNodeSizeInput`<sup>Optional</sup> <a name="masterNodeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSizeInput"></a>

```typescript
public readonly masterNodeSizeInput: string;
```

- *Type:* string

---

##### `nodePublicCertNameInput`<sup>Optional</sup> <a name="nodePublicCertNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertNameInput"></a>

```typescript
public readonly nodePublicCertNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `safeModeInput`<sup>Optional</sup> <a name="safeModeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeModeInput"></a>

```typescript
public readonly safeModeInput: number;
```

- *Type:* number

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | MrsClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `availableZoneId`<sup>Required</sup> <a name="availableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.availableZoneId"></a>

```typescript
public readonly availableZoneId: string;
```

- *Type:* string

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.billingType"></a>

```typescript
public readonly billingType: number;
```

- *Type:* number

---

##### `clusterAdminSecret`<sup>Required</sup> <a name="clusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterAdminSecret"></a>

```typescript
public readonly clusterAdminSecret: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `clusterType`<sup>Required</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterType"></a>

```typescript
public readonly clusterType: number;
```

- *Type:* number

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

---

##### `coreDataVolumeCount`<sup>Required</sup> <a name="coreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeCount"></a>

```typescript
public readonly coreDataVolumeCount: number;
```

- *Type:* number

---

##### `coreDataVolumeSize`<sup>Required</sup> <a name="coreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeSize"></a>

```typescript
public readonly coreDataVolumeSize: number;
```

- *Type:* number

---

##### `coreDataVolumeType`<sup>Required</sup> <a name="coreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreDataVolumeType"></a>

```typescript
public readonly coreDataVolumeType: string;
```

- *Type:* string

---

##### `coreNodeNum`<sup>Required</sup> <a name="coreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeNum"></a>

```typescript
public readonly coreNodeNum: number;
```

- *Type:* number

---

##### `coreNodeSize`<sup>Required</sup> <a name="coreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.coreNodeSize"></a>

```typescript
public readonly coreNodeSize: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `logCollection`<sup>Required</sup> <a name="logCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.logCollection"></a>

```typescript
public readonly logCollection: number;
```

- *Type:* number

---

##### `masterDataVolumeCount`<sup>Required</sup> <a name="masterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeCount"></a>

```typescript
public readonly masterDataVolumeCount: number;
```

- *Type:* number

---

##### `masterDataVolumeSize`<sup>Required</sup> <a name="masterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeSize"></a>

```typescript
public readonly masterDataVolumeSize: number;
```

- *Type:* number

---

##### `masterDataVolumeType`<sup>Required</sup> <a name="masterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterDataVolumeType"></a>

```typescript
public readonly masterDataVolumeType: string;
```

- *Type:* string

---

##### `masterNodeNum`<sup>Required</sup> <a name="masterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeNum"></a>

```typescript
public readonly masterNodeNum: number;
```

- *Type:* number

---

##### `masterNodeSize`<sup>Required</sup> <a name="masterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.masterNodeSize"></a>

```typescript
public readonly masterNodeSize: string;
```

- *Type:* string

---

##### `nodePublicCertName`<sup>Required</sup> <a name="nodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.nodePublicCertName"></a>

```typescript
public readonly nodePublicCertName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `safeMode`<sup>Required</sup> <a name="safeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.safeMode"></a>

```typescript
public readonly safeMode: number;
```

- *Type:* number

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MrsClusterV1AddJobs <a name="MrsClusterV1AddJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const mrsClusterV1AddJobs: mrsClusterV1.MrsClusterV1AddJobs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath">jarPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName">jobName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType">jobType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun">submitJobOnceClusterRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments">arguments</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction">fileAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath">hiveScriptPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql">hql</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input">input</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog">jobLog</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output">output</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster">shutdownCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}. |

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jarPath"></a>

```typescript
public readonly jarPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#jar_path MrsClusterV1#jar_path}.

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_name MrsClusterV1#job_name}.

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobType"></a>

```typescript
public readonly jobType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_type MrsClusterV1#job_type}.

---

##### `submitJobOnceClusterRun`<sup>Required</sup> <a name="submitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.submitJobOnceClusterRun"></a>

```typescript
public readonly submitJobOnceClusterRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#submit_job_once_cluster_run MrsClusterV1#submit_job_once_cluster_run}.

---

##### `arguments`<sup>Optional</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#arguments MrsClusterV1#arguments}.

---

##### `fileAction`<sup>Optional</sup> <a name="fileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.fileAction"></a>

```typescript
public readonly fileAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#file_action MrsClusterV1#file_action}.

---

##### `hiveScriptPath`<sup>Optional</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hiveScriptPath"></a>

```typescript
public readonly hiveScriptPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#hive_script_path MrsClusterV1#hive_script_path}.

---

##### `hql`<sup>Optional</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.hql"></a>

```typescript
public readonly hql: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#hql MrsClusterV1#hql}.

---

##### `input`<sup>Optional</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#input MrsClusterV1#input}.

---

##### `jobLog`<sup>Optional</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.jobLog"></a>

```typescript
public readonly jobLog: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#job_log MrsClusterV1#job_log}.

---

##### `output`<sup>Optional</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#output MrsClusterV1#output}.

---

##### `shutdownCluster`<sup>Optional</sup> <a name="shutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs.property.shutdownCluster"></a>

```typescript
public readonly shutdownCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#shutdown_cluster MrsClusterV1#shutdown_cluster}.

---

### MrsClusterV1BootstrapScripts <a name="MrsClusterV1BootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const mrsClusterV1BootstrapScripts: mrsClusterV1.MrsClusterV1BootstrapScripts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction">failAction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes">nodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster">activeMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart">beforeComponentStart</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters">parameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}. |

---

##### `failAction`<sup>Required</sup> <a name="failAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.failAction"></a>

```typescript
public readonly failAction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#fail_action MrsClusterV1#fail_action}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#name MrsClusterV1#name}.

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.nodes"></a>

```typescript
public readonly nodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#nodes MrsClusterV1#nodes}.

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#uri MrsClusterV1#uri}.

---

##### `activeMaster`<sup>Optional</sup> <a name="activeMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.activeMaster"></a>

```typescript
public readonly activeMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#active_master MrsClusterV1#active_master}.

---

##### `beforeComponentStart`<sup>Optional</sup> <a name="beforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.beforeComponentStart"></a>

```typescript
public readonly beforeComponentStart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#before_component_start MrsClusterV1#before_component_start}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#parameters MrsClusterV1#parameters}.

---

### MrsClusterV1ComponentListStruct <a name="MrsClusterV1ComponentListStruct" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const mrsClusterV1ComponentListStruct: mrsClusterV1.MrsClusterV1ComponentListStruct = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName">componentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}. |

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#component_name MrsClusterV1#component_name}.

---

### MrsClusterV1Config <a name="MrsClusterV1Config" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const mrsClusterV1Config: mrsClusterV1.MrsClusterV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId">availableZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType">billingType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion">clusterVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList">componentList</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]</code> | component_list block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum">coreNodeNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize">coreNodeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum">masterNodeNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize">masterNodeSize</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName">nodePublicCertName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode">safeMode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs">addJobs</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]</code> | add_jobs block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts">bootstrapScripts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]</code> | bootstrap_scripts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret">clusterAdminSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType">clusterType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount">coreDataVolumeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize">coreDataVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType">coreDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection">logCollection</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount">masterDataVolumeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize">masterDataVolumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType">masterDataVolumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availableZoneId`<sup>Required</sup> <a name="availableZoneId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.availableZoneId"></a>

```typescript
public readonly availableZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#available_zone_id MrsClusterV1#available_zone_id}.

---

##### `billingType`<sup>Required</sup> <a name="billingType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.billingType"></a>

```typescript
public readonly billingType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#billing_type MrsClusterV1#billing_type}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_name MrsClusterV1#cluster_name}.

---

##### `clusterVersion`<sup>Required</sup> <a name="clusterVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterVersion"></a>

```typescript
public readonly clusterVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_version MrsClusterV1#cluster_version}.

---

##### `componentList`<sup>Required</sup> <a name="componentList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.componentList"></a>

```typescript
public readonly componentList: IResolvable | MrsClusterV1ComponentListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]

component_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#component_list MrsClusterV1#component_list}

---

##### `coreNodeNum`<sup>Required</sup> <a name="coreNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeNum"></a>

```typescript
public readonly coreNodeNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_node_num MrsClusterV1#core_node_num}.

---

##### `coreNodeSize`<sup>Required</sup> <a name="coreNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreNodeSize"></a>

```typescript
public readonly coreNodeSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_node_size MrsClusterV1#core_node_size}.

---

##### `masterNodeNum`<sup>Required</sup> <a name="masterNodeNum" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeNum"></a>

```typescript
public readonly masterNodeNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_node_num MrsClusterV1#master_node_num}.

---

##### `masterNodeSize`<sup>Required</sup> <a name="masterNodeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterNodeSize"></a>

```typescript
public readonly masterNodeSize: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_node_size MrsClusterV1#master_node_size}.

---

##### `nodePublicCertName`<sup>Required</sup> <a name="nodePublicCertName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.nodePublicCertName"></a>

```typescript
public readonly nodePublicCertName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#node_public_cert_name MrsClusterV1#node_public_cert_name}.

---

##### `safeMode`<sup>Required</sup> <a name="safeMode" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.safeMode"></a>

```typescript
public readonly safeMode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#safe_mode MrsClusterV1#safe_mode}.

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#subnet_id MrsClusterV1#subnet_id}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#vpc_id MrsClusterV1#vpc_id}.

---

##### `addJobs`<sup>Optional</sup> <a name="addJobs" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.addJobs"></a>

```typescript
public readonly addJobs: IResolvable | MrsClusterV1AddJobs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]

add_jobs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#add_jobs MrsClusterV1#add_jobs}

---

##### `bootstrapScripts`<sup>Optional</sup> <a name="bootstrapScripts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.bootstrapScripts"></a>

```typescript
public readonly bootstrapScripts: IResolvable | MrsClusterV1BootstrapScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]

bootstrap_scripts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#bootstrap_scripts MrsClusterV1#bootstrap_scripts}

---

##### `clusterAdminSecret`<sup>Optional</sup> <a name="clusterAdminSecret" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterAdminSecret"></a>

```typescript
public readonly clusterAdminSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_admin_secret MrsClusterV1#cluster_admin_secret}.

---

##### `clusterType`<sup>Optional</sup> <a name="clusterType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.clusterType"></a>

```typescript
public readonly clusterType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#cluster_type MrsClusterV1#cluster_type}.

---

##### `coreDataVolumeCount`<sup>Optional</sup> <a name="coreDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeCount"></a>

```typescript
public readonly coreDataVolumeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_count MrsClusterV1#core_data_volume_count}.

---

##### `coreDataVolumeSize`<sup>Optional</sup> <a name="coreDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeSize"></a>

```typescript
public readonly coreDataVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_size MrsClusterV1#core_data_volume_size}.

---

##### `coreDataVolumeType`<sup>Optional</sup> <a name="coreDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.coreDataVolumeType"></a>

```typescript
public readonly coreDataVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#core_data_volume_type MrsClusterV1#core_data_volume_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#id MrsClusterV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.logCollection"></a>

```typescript
public readonly logCollection: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#log_collection MrsClusterV1#log_collection}.

---

##### `masterDataVolumeCount`<sup>Optional</sup> <a name="masterDataVolumeCount" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeCount"></a>

```typescript
public readonly masterDataVolumeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_count MrsClusterV1#master_data_volume_count}.

---

##### `masterDataVolumeSize`<sup>Optional</sup> <a name="masterDataVolumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeSize"></a>

```typescript
public readonly masterDataVolumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_size MrsClusterV1#master_data_volume_size}.

---

##### `masterDataVolumeType`<sup>Optional</sup> <a name="masterDataVolumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.masterDataVolumeType"></a>

```typescript
public readonly masterDataVolumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#master_data_volume_type MrsClusterV1#master_data_volume_type}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#region MrsClusterV1#region}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#tags MrsClusterV1#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: MrsClusterV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#timeouts MrsClusterV1#timeouts}

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#volume_size MrsClusterV1#volume_size}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Config.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#volume_type MrsClusterV1#volume_type}.

---

### MrsClusterV1Timeouts <a name="MrsClusterV1Timeouts" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

const mrsClusterV1Timeouts: mrsClusterV1.MrsClusterV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#create MrsClusterV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.45/docs/resources/mrs_cluster_v1#delete MrsClusterV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### MrsClusterV1AddJobsList <a name="MrsClusterV1AddJobsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1AddJobsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get"></a>

```typescript
public get(index: number): MrsClusterV1AddJobsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1AddJobs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>[]

---


### MrsClusterV1AddJobsOutputReference <a name="MrsClusterV1AddJobsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1AddJobsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments">resetArguments</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction">resetFileAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath">resetHiveScriptPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql">resetHql</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput">resetInput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog">resetJobLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput">resetOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster">resetShutdownCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArguments` <a name="resetArguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetArguments"></a>

```typescript
public resetArguments(): void
```

##### `resetFileAction` <a name="resetFileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetFileAction"></a>

```typescript
public resetFileAction(): void
```

##### `resetHiveScriptPath` <a name="resetHiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHiveScriptPath"></a>

```typescript
public resetHiveScriptPath(): void
```

##### `resetHql` <a name="resetHql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetHql"></a>

```typescript
public resetHql(): void
```

##### `resetInput` <a name="resetInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetInput"></a>

```typescript
public resetInput(): void
```

##### `resetJobLog` <a name="resetJobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetJobLog"></a>

```typescript
public resetJobLog(): void
```

##### `resetOutput` <a name="resetOutput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetOutput"></a>

```typescript
public resetOutput(): void
```

##### `resetShutdownCluster` <a name="resetShutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.resetShutdownCluster"></a>

```typescript
public resetShutdownCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput">argumentsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput">fileActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput">hiveScriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput">hqlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput">inputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput">jarPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput">jobLogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput">jobNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput">jobTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput">outputInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput">shutdownClusterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput">submitJobOnceClusterRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments">arguments</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction">fileAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath">hiveScriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql">hql</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input">input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath">jarPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog">jobLog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName">jobName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType">jobType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output">output</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster">shutdownCluster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun">submitJobOnceClusterRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `argumentsInput`<sup>Optional</sup> <a name="argumentsInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.argumentsInput"></a>

```typescript
public readonly argumentsInput: string;
```

- *Type:* string

---

##### `fileActionInput`<sup>Optional</sup> <a name="fileActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileActionInput"></a>

```typescript
public readonly fileActionInput: string;
```

- *Type:* string

---

##### `hiveScriptPathInput`<sup>Optional</sup> <a name="hiveScriptPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPathInput"></a>

```typescript
public readonly hiveScriptPathInput: string;
```

- *Type:* string

---

##### `hqlInput`<sup>Optional</sup> <a name="hqlInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hqlInput"></a>

```typescript
public readonly hqlInput: string;
```

- *Type:* string

---

##### `inputInput`<sup>Optional</sup> <a name="inputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.inputInput"></a>

```typescript
public readonly inputInput: string;
```

- *Type:* string

---

##### `jarPathInput`<sup>Optional</sup> <a name="jarPathInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPathInput"></a>

```typescript
public readonly jarPathInput: string;
```

- *Type:* string

---

##### `jobLogInput`<sup>Optional</sup> <a name="jobLogInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLogInput"></a>

```typescript
public readonly jobLogInput: string;
```

- *Type:* string

---

##### `jobNameInput`<sup>Optional</sup> <a name="jobNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobNameInput"></a>

```typescript
public readonly jobNameInput: string;
```

- *Type:* string

---

##### `jobTypeInput`<sup>Optional</sup> <a name="jobTypeInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobTypeInput"></a>

```typescript
public readonly jobTypeInput: number;
```

- *Type:* number

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.outputInput"></a>

```typescript
public readonly outputInput: string;
```

- *Type:* string

---

##### `shutdownClusterInput`<sup>Optional</sup> <a name="shutdownClusterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownClusterInput"></a>

```typescript
public readonly shutdownClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `submitJobOnceClusterRunInput`<sup>Optional</sup> <a name="submitJobOnceClusterRunInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRunInput"></a>

```typescript
public readonly submitJobOnceClusterRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.arguments"></a>

```typescript
public readonly arguments: string;
```

- *Type:* string

---

##### `fileAction`<sup>Required</sup> <a name="fileAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.fileAction"></a>

```typescript
public readonly fileAction: string;
```

- *Type:* string

---

##### `hiveScriptPath`<sup>Required</sup> <a name="hiveScriptPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hiveScriptPath"></a>

```typescript
public readonly hiveScriptPath: string;
```

- *Type:* string

---

##### `hql`<sup>Required</sup> <a name="hql" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.hql"></a>

```typescript
public readonly hql: string;
```

- *Type:* string

---

##### `input`<sup>Required</sup> <a name="input" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.input"></a>

```typescript
public readonly input: string;
```

- *Type:* string

---

##### `jarPath`<sup>Required</sup> <a name="jarPath" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jarPath"></a>

```typescript
public readonly jarPath: string;
```

- *Type:* string

---

##### `jobLog`<sup>Required</sup> <a name="jobLog" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobLog"></a>

```typescript
public readonly jobLog: string;
```

- *Type:* string

---

##### `jobName`<sup>Required</sup> <a name="jobName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobName"></a>

```typescript
public readonly jobName: string;
```

- *Type:* string

---

##### `jobType`<sup>Required</sup> <a name="jobType" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.jobType"></a>

```typescript
public readonly jobType: number;
```

- *Type:* number

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.output"></a>

```typescript
public readonly output: string;
```

- *Type:* string

---

##### `shutdownCluster`<sup>Required</sup> <a name="shutdownCluster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.shutdownCluster"></a>

```typescript
public readonly shutdownCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `submitJobOnceClusterRun`<sup>Required</sup> <a name="submitJobOnceClusterRun" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.submitJobOnceClusterRun"></a>

```typescript
public readonly submitJobOnceClusterRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1AddJobs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1AddJobs">MrsClusterV1AddJobs</a>

---


### MrsClusterV1BootstrapScriptsList <a name="MrsClusterV1BootstrapScriptsList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1BootstrapScriptsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get"></a>

```typescript
public get(index: number): MrsClusterV1BootstrapScriptsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1BootstrapScripts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>[]

---


### MrsClusterV1BootstrapScriptsOutputReference <a name="MrsClusterV1BootstrapScriptsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster">resetActiveMaster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart">resetBeforeComponentStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActiveMaster` <a name="resetActiveMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetActiveMaster"></a>

```typescript
public resetActiveMaster(): void
```

##### `resetBeforeComponentStart` <a name="resetBeforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetBeforeComponentStart"></a>

```typescript
public resetBeforeComponentStart(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput">activeMasterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput">beforeComponentStartInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput">failActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput">nodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput">parametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster">activeMaster</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart">beforeComponentStart</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction">failAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes">nodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters">parameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeMasterInput`<sup>Optional</sup> <a name="activeMasterInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMasterInput"></a>

```typescript
public readonly activeMasterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beforeComponentStartInput`<sup>Optional</sup> <a name="beforeComponentStartInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStartInput"></a>

```typescript
public readonly beforeComponentStartInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failActionInput`<sup>Optional</sup> <a name="failActionInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failActionInput"></a>

```typescript
public readonly failActionInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nodesInput`<sup>Optional</sup> <a name="nodesInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodesInput"></a>

```typescript
public readonly nodesInput: string[];
```

- *Type:* string[]

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `activeMaster`<sup>Required</sup> <a name="activeMaster" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.activeMaster"></a>

```typescript
public readonly activeMaster: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `beforeComponentStart`<sup>Required</sup> <a name="beforeComponentStart" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.beforeComponentStart"></a>

```typescript
public readonly beforeComponentStart: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failAction`<sup>Required</sup> <a name="failAction" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.failAction"></a>

```typescript
public readonly failAction: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.nodes"></a>

```typescript
public readonly nodes: string[];
```

- *Type:* string[]

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScriptsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1BootstrapScripts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1BootstrapScripts">MrsClusterV1BootstrapScripts</a>

---


### MrsClusterV1ComponentListStructList <a name="MrsClusterV1ComponentListStructList" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1ComponentListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get"></a>

```typescript
public get(index: number): MrsClusterV1ComponentListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1ComponentListStruct[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>[]

---


### MrsClusterV1ComponentListStructOutputReference <a name="MrsClusterV1ComponentListStructOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1ComponentListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc">componentDesc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId">componentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion">componentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput">componentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName">componentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `componentDesc`<sup>Required</sup> <a name="componentDesc" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentDesc"></a>

```typescript
public readonly componentDesc: string;
```

- *Type:* string

---

##### `componentId`<sup>Required</sup> <a name="componentId" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentId"></a>

```typescript
public readonly componentId: string;
```

- *Type:* string

---

##### `componentVersion`<sup>Required</sup> <a name="componentVersion" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentVersion"></a>

```typescript
public readonly componentVersion: string;
```

- *Type:* string

---

##### `componentNameInput`<sup>Optional</sup> <a name="componentNameInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentNameInput"></a>

```typescript
public readonly componentNameInput: string;
```

- *Type:* string

---

##### `componentName`<sup>Required</sup> <a name="componentName" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.componentName"></a>

```typescript
public readonly componentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1ComponentListStruct;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1ComponentListStruct">MrsClusterV1ComponentListStruct</a>

---


### MrsClusterV1TimeoutsOutputReference <a name="MrsClusterV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { mrsClusterV1 } from '@cdktf/provider-opentelekomcloud'

new mrsClusterV1.MrsClusterV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MrsClusterV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.mrsClusterV1.MrsClusterV1Timeouts">MrsClusterV1Timeouts</a>

---



