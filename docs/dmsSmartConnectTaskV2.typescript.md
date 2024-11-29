# `dmsSmartConnectTaskV2` Submodule <a name="`dmsSmartConnectTaskV2` Submodule" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsSmartConnectTaskV2 <a name="DmsSmartConnectTaskV2" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2 opentelekomcloud_dms_smart_connect_task_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

new dmsSmartConnectTaskV2.DmsSmartConnectTaskV2(scope: Construct, id: string, config: DmsSmartConnectTaskV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config">DmsSmartConnectTaskV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config">DmsSmartConnectTaskV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask">putDestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask">putSourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationTask">resetDestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationType">resetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceTask">resetSourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetStartLater">resetStartLater</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopics">resetTopics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopicsRegex">resetTopicsRegex</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationTask` <a name="putDestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask"></a>

```typescript
public putDestinationTask(value: DmsSmartConnectTaskV2DestinationTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putDestinationTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---

##### `putSourceTask` <a name="putSourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask"></a>

```typescript
public putSourceTask(value: DmsSmartConnectTaskV2SourceTask): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putSourceTask.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsSmartConnectTaskV2Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---

##### `resetDestinationTask` <a name="resetDestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationTask"></a>

```typescript
public resetDestinationTask(): void
```

##### `resetDestinationType` <a name="resetDestinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetDestinationType"></a>

```typescript
public resetDestinationType(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSourceTask` <a name="resetSourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceTask"></a>

```typescript
public resetSourceTask(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetStartLater` <a name="resetStartLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetStartLater"></a>

```typescript
public resetStartLater(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTopics` <a name="resetTopics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopics"></a>

```typescript
public resetTopics(): void
```

##### `resetTopicsRegex` <a name="resetTopicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.resetTopicsRegex"></a>

```typescript
public resetTopicsRegex(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DmsSmartConnectTaskV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DmsSmartConnectTaskV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsSmartConnectTaskV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsSmartConnectTaskV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DmsSmartConnectTaskV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTask">destinationTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference">DmsSmartConnectTaskV2DestinationTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTask">sourceTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference">DmsSmartConnectTaskV2SourceTaskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference">DmsSmartConnectTaskV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTaskInput">destinationTaskInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTypeInput">destinationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceIdInput">instanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTaskInput">sourceTaskInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTypeInput">sourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLaterInput">startLaterInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskNameInput">taskNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsInput">topicsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegexInput">topicsRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationType">destinationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLater">startLater</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskName">taskName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topics">topics</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegex">topicsRegex</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `destinationTask`<sup>Required</sup> <a name="destinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTask"></a>

```typescript
public readonly destinationTask: DmsSmartConnectTaskV2DestinationTaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference">DmsSmartConnectTaskV2DestinationTaskOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `sourceTask`<sup>Required</sup> <a name="sourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTask"></a>

```typescript
public readonly sourceTask: DmsSmartConnectTaskV2SourceTaskOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference">DmsSmartConnectTaskV2SourceTaskOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeouts"></a>

```typescript
public readonly timeouts: DmsSmartConnectTaskV2TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference">DmsSmartConnectTaskV2TimeoutsOutputReference</a>

---

##### `destinationTaskInput`<sup>Optional</sup> <a name="destinationTaskInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTaskInput"></a>

```typescript
public readonly destinationTaskInput: DmsSmartConnectTaskV2DestinationTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="destinationTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationTypeInput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceIdInput"></a>

```typescript
public readonly instanceIdInput: string;
```

- *Type:* string

---

##### `sourceTaskInput`<sup>Optional</sup> <a name="sourceTaskInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTaskInput"></a>

```typescript
public readonly sourceTaskInput: DmsSmartConnectTaskV2SourceTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: string;
```

- *Type:* string

---

##### `startLaterInput`<sup>Optional</sup> <a name="startLaterInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLaterInput"></a>

```typescript
public readonly startLaterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskNameInput`<sup>Optional</sup> <a name="taskNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskNameInput"></a>

```typescript
public readonly taskNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DmsSmartConnectTaskV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsInput"></a>

```typescript
public readonly topicsInput: string[];
```

- *Type:* string[]

---

##### `topicsRegexInput`<sup>Optional</sup> <a name="topicsRegexInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegexInput"></a>

```typescript
public readonly topicsRegexInput: string;
```

- *Type:* string

---

##### `destinationType`<sup>Required</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `startLater`<sup>Required</sup> <a name="startLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.startLater"></a>

```typescript
public readonly startLater: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

---

##### `topicsRegex`<sup>Required</sup> <a name="topicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.topicsRegex"></a>

```typescript
public readonly topicsRegex: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsSmartConnectTaskV2Config <a name="DmsSmartConnectTaskV2Config" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

const dmsSmartConnectTaskV2Config: dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.instanceId">instanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.taskName">taskName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationTask">destinationTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | destination_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationType">destinationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceTask">sourceTask</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | source_task block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceType">sourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.startLater">startLater</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topics">topics</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topicsRegex">topicsRegex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#instance_id DmsSmartConnectTaskV2#instance_id}.

---

##### `taskName`<sup>Required</sup> <a name="taskName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.taskName"></a>

```typescript
public readonly taskName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_name DmsSmartConnectTaskV2#task_name}.

---

##### `destinationTask`<sup>Optional</sup> <a name="destinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationTask"></a>

```typescript
public readonly destinationTask: DmsSmartConnectTaskV2DestinationTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

destination_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_task DmsSmartConnectTaskV2#destination_task}

---

##### `destinationType`<sup>Optional</sup> <a name="destinationType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.destinationType"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_type DmsSmartConnectTaskV2#destination_type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#id DmsSmartConnectTaskV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceTask`<sup>Optional</sup> <a name="sourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceTask"></a>

```typescript
public readonly sourceTask: DmsSmartConnectTaskV2SourceTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

source_task block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_task DmsSmartConnectTaskV2#source_task}

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#source_type DmsSmartConnectTaskV2#source_type}.

---

##### `startLater`<sup>Optional</sup> <a name="startLater" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.startLater"></a>

```typescript
public readonly startLater: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#start_later DmsSmartConnectTaskV2#start_later}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.timeouts"></a>

```typescript
public readonly timeouts: DmsSmartConnectTaskV2Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#timeouts DmsSmartConnectTaskV2#timeouts}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topics"></a>

```typescript
public readonly topics: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics DmsSmartConnectTaskV2#topics}.

---

##### `topicsRegex`<sup>Optional</sup> <a name="topicsRegex" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Config.property.topicsRegex"></a>

```typescript
public readonly topicsRegex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_regex DmsSmartConnectTaskV2#topics_regex}.

---

### DmsSmartConnectTaskV2DestinationTask <a name="DmsSmartConnectTaskV2DestinationTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

const dmsSmartConnectTaskV2DestinationTask: dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.accessKey">accessKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#access_key DmsSmartConnectTaskV2#access_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.consumerStrategy">consumerStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.deliverTimeInterval">deliverTimeInterval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#deliver_time_interval DmsSmartConnectTaskV2#deliver_time_interval}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.destinationFileType">destinationFileType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_file_type DmsSmartConnectTaskV2#destination_file_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsBucketName">obsBucketName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_bucket_name DmsSmartConnectTaskV2#obs_bucket_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsPath">obsPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_path DmsSmartConnectTaskV2#obs_path}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.partitionFormat">partitionFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#partition_format DmsSmartConnectTaskV2#partition_format}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#record_delimiter DmsSmartConnectTaskV2#record_delimiter}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.secretKey">secretKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#secret_key DmsSmartConnectTaskV2#secret_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.storeKeys">storeKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#store_keys DmsSmartConnectTaskV2#store_keys}. |

---

##### `accessKey`<sup>Optional</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#access_key DmsSmartConnectTaskV2#access_key}.

---

##### `consumerStrategy`<sup>Optional</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.consumerStrategy"></a>

```typescript
public readonly consumerStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}.

---

##### `deliverTimeInterval`<sup>Optional</sup> <a name="deliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.deliverTimeInterval"></a>

```typescript
public readonly deliverTimeInterval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#deliver_time_interval DmsSmartConnectTaskV2#deliver_time_interval}.

---

##### `destinationFileType`<sup>Optional</sup> <a name="destinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.destinationFileType"></a>

```typescript
public readonly destinationFileType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#destination_file_type DmsSmartConnectTaskV2#destination_file_type}.

---

##### `obsBucketName`<sup>Optional</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsBucketName"></a>

```typescript
public readonly obsBucketName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_bucket_name DmsSmartConnectTaskV2#obs_bucket_name}.

---

##### `obsPath`<sup>Optional</sup> <a name="obsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.obsPath"></a>

```typescript
public readonly obsPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#obs_path DmsSmartConnectTaskV2#obs_path}.

---

##### `partitionFormat`<sup>Optional</sup> <a name="partitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.partitionFormat"></a>

```typescript
public readonly partitionFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#partition_format DmsSmartConnectTaskV2#partition_format}.

---

##### `recordDelimiter`<sup>Optional</sup> <a name="recordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#record_delimiter DmsSmartConnectTaskV2#record_delimiter}.

---

##### `secretKey`<sup>Optional</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#secret_key DmsSmartConnectTaskV2#secret_key}.

---

##### `storeKeys`<sup>Optional</sup> <a name="storeKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask.property.storeKeys"></a>

```typescript
public readonly storeKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#store_keys DmsSmartConnectTaskV2#store_keys}.

---

### DmsSmartConnectTaskV2SourceTask <a name="DmsSmartConnectTaskV2SourceTask" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

const dmsSmartConnectTaskV2SourceTask: dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.compressionType">compressionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#compression_type DmsSmartConnectTaskV2#compression_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.consumerStrategy">consumerStrategy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.currentInstanceAlias">currentInstanceAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#current_instance_alias DmsSmartConnectTaskV2#current_instance_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#direction DmsSmartConnectTaskV2#direction}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#password DmsSmartConnectTaskV2#password}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAddress">peerInstanceAddress</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_address DmsSmartConnectTaskV2#peer_instance_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAlias">peerInstanceAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_alias DmsSmartConnectTaskV2#peer_instance_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceId">peerInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_id DmsSmartConnectTaskV2#peer_instance_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.provenanceHeaderEnabled">provenanceHeaderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#provenance_header_enabled DmsSmartConnectTaskV2#provenance_header_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.renameTopicEnabled">renameTopicEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#rename_topic_enabled DmsSmartConnectTaskV2#rename_topic_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#replication_factor DmsSmartConnectTaskV2#replication_factor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.saslMechanism">saslMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sasl_mechanism DmsSmartConnectTaskV2#sasl_mechanism}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#security_protocol DmsSmartConnectTaskV2#security_protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.syncConsumerOffsetsEnabled">syncConsumerOffsetsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sync_consumer_offsets_enabled DmsSmartConnectTaskV2#sync_consumer_offsets_enabled}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.taskNum">taskNum</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_num DmsSmartConnectTaskV2#task_num}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.topicsMapping">topicsMapping</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_mapping DmsSmartConnectTaskV2#topics_mapping}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.userName">userName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#user_name DmsSmartConnectTaskV2#user_name}. |

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#compression_type DmsSmartConnectTaskV2#compression_type}.

---

##### `consumerStrategy`<sup>Optional</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.consumerStrategy"></a>

```typescript
public readonly consumerStrategy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#consumer_strategy DmsSmartConnectTaskV2#consumer_strategy}.

---

##### `currentInstanceAlias`<sup>Optional</sup> <a name="currentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.currentInstanceAlias"></a>

```typescript
public readonly currentInstanceAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#current_instance_alias DmsSmartConnectTaskV2#current_instance_alias}.

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#direction DmsSmartConnectTaskV2#direction}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#password DmsSmartConnectTaskV2#password}.

---

##### `peerInstanceAddress`<sup>Optional</sup> <a name="peerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAddress"></a>

```typescript
public readonly peerInstanceAddress: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_address DmsSmartConnectTaskV2#peer_instance_address}.

---

##### `peerInstanceAlias`<sup>Optional</sup> <a name="peerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceAlias"></a>

```typescript
public readonly peerInstanceAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_alias DmsSmartConnectTaskV2#peer_instance_alias}.

---

##### `peerInstanceId`<sup>Optional</sup> <a name="peerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.peerInstanceId"></a>

```typescript
public readonly peerInstanceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#peer_instance_id DmsSmartConnectTaskV2#peer_instance_id}.

---

##### `provenanceHeaderEnabled`<sup>Optional</sup> <a name="provenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.provenanceHeaderEnabled"></a>

```typescript
public readonly provenanceHeaderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#provenance_header_enabled DmsSmartConnectTaskV2#provenance_header_enabled}.

---

##### `renameTopicEnabled`<sup>Optional</sup> <a name="renameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.renameTopicEnabled"></a>

```typescript
public readonly renameTopicEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#rename_topic_enabled DmsSmartConnectTaskV2#rename_topic_enabled}.

---

##### `replicationFactor`<sup>Optional</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#replication_factor DmsSmartConnectTaskV2#replication_factor}.

---

##### `saslMechanism`<sup>Optional</sup> <a name="saslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.saslMechanism"></a>

```typescript
public readonly saslMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sasl_mechanism DmsSmartConnectTaskV2#sasl_mechanism}.

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#security_protocol DmsSmartConnectTaskV2#security_protocol}.

---

##### `syncConsumerOffsetsEnabled`<sup>Optional</sup> <a name="syncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.syncConsumerOffsetsEnabled"></a>

```typescript
public readonly syncConsumerOffsetsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#sync_consumer_offsets_enabled DmsSmartConnectTaskV2#sync_consumer_offsets_enabled}.

---

##### `taskNum`<sup>Optional</sup> <a name="taskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.taskNum"></a>

```typescript
public readonly taskNum: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#task_num DmsSmartConnectTaskV2#task_num}.

---

##### `topicsMapping`<sup>Optional</sup> <a name="topicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.topicsMapping"></a>

```typescript
public readonly topicsMapping: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#topics_mapping DmsSmartConnectTaskV2#topics_mapping}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#user_name DmsSmartConnectTaskV2#user_name}.

---

### DmsSmartConnectTaskV2Timeouts <a name="DmsSmartConnectTaskV2Timeouts" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

const dmsSmartConnectTaskV2Timeouts: dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#create DmsSmartConnectTaskV2#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/dms_smart_connect_task_v2#create DmsSmartConnectTaskV2#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### DmsSmartConnectTaskV2DestinationTaskOutputReference <a name="DmsSmartConnectTaskV2DestinationTaskOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

new dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetAccessKey">resetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetConsumerStrategy">resetConsumerStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDeliverTimeInterval">resetDeliverTimeInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDestinationFileType">resetDestinationFileType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsBucketName">resetObsBucketName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsPath">resetObsPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetPartitionFormat">resetPartitionFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetRecordDelimiter">resetRecordDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetSecretKey">resetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetStoreKeys">resetStoreKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessKey` <a name="resetAccessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetAccessKey"></a>

```typescript
public resetAccessKey(): void
```

##### `resetConsumerStrategy` <a name="resetConsumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetConsumerStrategy"></a>

```typescript
public resetConsumerStrategy(): void
```

##### `resetDeliverTimeInterval` <a name="resetDeliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDeliverTimeInterval"></a>

```typescript
public resetDeliverTimeInterval(): void
```

##### `resetDestinationFileType` <a name="resetDestinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetDestinationFileType"></a>

```typescript
public resetDestinationFileType(): void
```

##### `resetObsBucketName` <a name="resetObsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsBucketName"></a>

```typescript
public resetObsBucketName(): void
```

##### `resetObsPath` <a name="resetObsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetObsPath"></a>

```typescript
public resetObsPath(): void
```

##### `resetPartitionFormat` <a name="resetPartitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetPartitionFormat"></a>

```typescript
public resetPartitionFormat(): void
```

##### `resetRecordDelimiter` <a name="resetRecordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetRecordDelimiter"></a>

```typescript
public resetRecordDelimiter(): void
```

##### `resetSecretKey` <a name="resetSecretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetSecretKey"></a>

```typescript
public resetSecretKey(): void
```

##### `resetStoreKeys` <a name="resetStoreKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.resetStoreKeys"></a>

```typescript
public resetStoreKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKeyInput">accessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategyInput">consumerStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeIntervalInput">deliverTimeIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileTypeInput">destinationFileTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketNameInput">obsBucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPathInput">obsPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormatInput">partitionFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiterInput">recordDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKeyInput">secretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeysInput">storeKeysInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKey">accessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategy">consumerStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeInterval">deliverTimeInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileType">destinationFileType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketName">obsBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPath">obsPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormat">partitionFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiter">recordDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKey">secretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeys">storeKeys</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessKeyInput`<sup>Optional</sup> <a name="accessKeyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKeyInput"></a>

```typescript
public readonly accessKeyInput: string;
```

- *Type:* string

---

##### `consumerStrategyInput`<sup>Optional</sup> <a name="consumerStrategyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategyInput"></a>

```typescript
public readonly consumerStrategyInput: string;
```

- *Type:* string

---

##### `deliverTimeIntervalInput`<sup>Optional</sup> <a name="deliverTimeIntervalInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeIntervalInput"></a>

```typescript
public readonly deliverTimeIntervalInput: number;
```

- *Type:* number

---

##### `destinationFileTypeInput`<sup>Optional</sup> <a name="destinationFileTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileTypeInput"></a>

```typescript
public readonly destinationFileTypeInput: string;
```

- *Type:* string

---

##### `obsBucketNameInput`<sup>Optional</sup> <a name="obsBucketNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketNameInput"></a>

```typescript
public readonly obsBucketNameInput: string;
```

- *Type:* string

---

##### `obsPathInput`<sup>Optional</sup> <a name="obsPathInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPathInput"></a>

```typescript
public readonly obsPathInput: string;
```

- *Type:* string

---

##### `partitionFormatInput`<sup>Optional</sup> <a name="partitionFormatInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormatInput"></a>

```typescript
public readonly partitionFormatInput: string;
```

- *Type:* string

---

##### `recordDelimiterInput`<sup>Optional</sup> <a name="recordDelimiterInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiterInput"></a>

```typescript
public readonly recordDelimiterInput: string;
```

- *Type:* string

---

##### `secretKeyInput`<sup>Optional</sup> <a name="secretKeyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKeyInput"></a>

```typescript
public readonly secretKeyInput: string;
```

- *Type:* string

---

##### `storeKeysInput`<sup>Optional</sup> <a name="storeKeysInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeysInput"></a>

```typescript
public readonly storeKeysInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessKey`<sup>Required</sup> <a name="accessKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.accessKey"></a>

```typescript
public readonly accessKey: string;
```

- *Type:* string

---

##### `consumerStrategy`<sup>Required</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.consumerStrategy"></a>

```typescript
public readonly consumerStrategy: string;
```

- *Type:* string

---

##### `deliverTimeInterval`<sup>Required</sup> <a name="deliverTimeInterval" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.deliverTimeInterval"></a>

```typescript
public readonly deliverTimeInterval: number;
```

- *Type:* number

---

##### `destinationFileType`<sup>Required</sup> <a name="destinationFileType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.destinationFileType"></a>

```typescript
public readonly destinationFileType: string;
```

- *Type:* string

---

##### `obsBucketName`<sup>Required</sup> <a name="obsBucketName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsBucketName"></a>

```typescript
public readonly obsBucketName: string;
```

- *Type:* string

---

##### `obsPath`<sup>Required</sup> <a name="obsPath" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.obsPath"></a>

```typescript
public readonly obsPath: string;
```

- *Type:* string

---

##### `partitionFormat`<sup>Required</sup> <a name="partitionFormat" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.partitionFormat"></a>

```typescript
public readonly partitionFormat: string;
```

- *Type:* string

---

##### `recordDelimiter`<sup>Required</sup> <a name="recordDelimiter" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.recordDelimiter"></a>

```typescript
public readonly recordDelimiter: string;
```

- *Type:* string

---

##### `secretKey`<sup>Required</sup> <a name="secretKey" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.secretKey"></a>

```typescript
public readonly secretKey: string;
```

- *Type:* string

---

##### `storeKeys`<sup>Required</sup> <a name="storeKeys" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.storeKeys"></a>

```typescript
public readonly storeKeys: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsSmartConnectTaskV2DestinationTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2DestinationTask">DmsSmartConnectTaskV2DestinationTask</a>

---


### DmsSmartConnectTaskV2SourceTaskOutputReference <a name="DmsSmartConnectTaskV2SourceTaskOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

new dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetConsumerStrategy">resetConsumerStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCurrentInstanceAlias">resetCurrentInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAddress">resetPeerInstanceAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAlias">resetPeerInstanceAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceId">resetPeerInstanceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetProvenanceHeaderEnabled">resetProvenanceHeaderEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetRenameTopicEnabled">resetRenameTopicEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetReplicationFactor">resetReplicationFactor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSaslMechanism">resetSaslMechanism</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSyncConsumerOffsetsEnabled">resetSyncConsumerOffsetsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTaskNum">resetTaskNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTopicsMapping">resetTopicsMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetConsumerStrategy` <a name="resetConsumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetConsumerStrategy"></a>

```typescript
public resetConsumerStrategy(): void
```

##### `resetCurrentInstanceAlias` <a name="resetCurrentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetCurrentInstanceAlias"></a>

```typescript
public resetCurrentInstanceAlias(): void
```

##### `resetDirection` <a name="resetDirection" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetDirection"></a>

```typescript
public resetDirection(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPeerInstanceAddress` <a name="resetPeerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAddress"></a>

```typescript
public resetPeerInstanceAddress(): void
```

##### `resetPeerInstanceAlias` <a name="resetPeerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceAlias"></a>

```typescript
public resetPeerInstanceAlias(): void
```

##### `resetPeerInstanceId` <a name="resetPeerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetPeerInstanceId"></a>

```typescript
public resetPeerInstanceId(): void
```

##### `resetProvenanceHeaderEnabled` <a name="resetProvenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetProvenanceHeaderEnabled"></a>

```typescript
public resetProvenanceHeaderEnabled(): void
```

##### `resetRenameTopicEnabled` <a name="resetRenameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetRenameTopicEnabled"></a>

```typescript
public resetRenameTopicEnabled(): void
```

##### `resetReplicationFactor` <a name="resetReplicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetReplicationFactor"></a>

```typescript
public resetReplicationFactor(): void
```

##### `resetSaslMechanism` <a name="resetSaslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSaslMechanism"></a>

```typescript
public resetSaslMechanism(): void
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSecurityProtocol"></a>

```typescript
public resetSecurityProtocol(): void
```

##### `resetSyncConsumerOffsetsEnabled` <a name="resetSyncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetSyncConsumerOffsetsEnabled"></a>

```typescript
public resetSyncConsumerOffsetsEnabled(): void
```

##### `resetTaskNum` <a name="resetTaskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTaskNum"></a>

```typescript
public resetTaskNum(): void
```

##### `resetTopicsMapping` <a name="resetTopicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetTopicsMapping"></a>

```typescript
public resetTopicsMapping(): void
```

##### `resetUserName` <a name="resetUserName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.resetUserName"></a>

```typescript
public resetUserName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategyInput">consumerStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAliasInput">currentInstanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddressInput">peerInstanceAddressInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAliasInput">peerInstanceAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceIdInput">peerInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabledInput">provenanceHeaderEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabledInput">renameTopicEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactorInput">replicationFactorInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanismInput">saslMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabledInput">syncConsumerOffsetsEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNumInput">taskNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMappingInput">topicsMappingInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userNameInput">userNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategy">consumerStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAlias">currentInstanceAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddress">peerInstanceAddress</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAlias">peerInstanceAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceId">peerInstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabled">provenanceHeaderEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabled">renameTopicEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactor">replicationFactor</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanism">saslMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabled">syncConsumerOffsetsEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNum">taskNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMapping">topicsMapping</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `consumerStrategyInput`<sup>Optional</sup> <a name="consumerStrategyInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategyInput"></a>

```typescript
public readonly consumerStrategyInput: string;
```

- *Type:* string

---

##### `currentInstanceAliasInput`<sup>Optional</sup> <a name="currentInstanceAliasInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAliasInput"></a>

```typescript
public readonly currentInstanceAliasInput: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `peerInstanceAddressInput`<sup>Optional</sup> <a name="peerInstanceAddressInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddressInput"></a>

```typescript
public readonly peerInstanceAddressInput: string[];
```

- *Type:* string[]

---

##### `peerInstanceAliasInput`<sup>Optional</sup> <a name="peerInstanceAliasInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAliasInput"></a>

```typescript
public readonly peerInstanceAliasInput: string;
```

- *Type:* string

---

##### `peerInstanceIdInput`<sup>Optional</sup> <a name="peerInstanceIdInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceIdInput"></a>

```typescript
public readonly peerInstanceIdInput: string;
```

- *Type:* string

---

##### `provenanceHeaderEnabledInput`<sup>Optional</sup> <a name="provenanceHeaderEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabledInput"></a>

```typescript
public readonly provenanceHeaderEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renameTopicEnabledInput`<sup>Optional</sup> <a name="renameTopicEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabledInput"></a>

```typescript
public readonly renameTopicEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationFactorInput`<sup>Optional</sup> <a name="replicationFactorInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactorInput"></a>

```typescript
public readonly replicationFactorInput: number;
```

- *Type:* number

---

##### `saslMechanismInput`<sup>Optional</sup> <a name="saslMechanismInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanismInput"></a>

```typescript
public readonly saslMechanismInput: string;
```

- *Type:* string

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocolInput"></a>

```typescript
public readonly securityProtocolInput: string;
```

- *Type:* string

---

##### `syncConsumerOffsetsEnabledInput`<sup>Optional</sup> <a name="syncConsumerOffsetsEnabledInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabledInput"></a>

```typescript
public readonly syncConsumerOffsetsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskNumInput`<sup>Optional</sup> <a name="taskNumInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNumInput"></a>

```typescript
public readonly taskNumInput: number;
```

- *Type:* number

---

##### `topicsMappingInput`<sup>Optional</sup> <a name="topicsMappingInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMappingInput"></a>

```typescript
public readonly topicsMappingInput: string[];
```

- *Type:* string[]

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userNameInput"></a>

```typescript
public readonly userNameInput: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `consumerStrategy`<sup>Required</sup> <a name="consumerStrategy" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.consumerStrategy"></a>

```typescript
public readonly consumerStrategy: string;
```

- *Type:* string

---

##### `currentInstanceAlias`<sup>Required</sup> <a name="currentInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.currentInstanceAlias"></a>

```typescript
public readonly currentInstanceAlias: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `peerInstanceAddress`<sup>Required</sup> <a name="peerInstanceAddress" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAddress"></a>

```typescript
public readonly peerInstanceAddress: string[];
```

- *Type:* string[]

---

##### `peerInstanceAlias`<sup>Required</sup> <a name="peerInstanceAlias" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceAlias"></a>

```typescript
public readonly peerInstanceAlias: string;
```

- *Type:* string

---

##### `peerInstanceId`<sup>Required</sup> <a name="peerInstanceId" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.peerInstanceId"></a>

```typescript
public readonly peerInstanceId: string;
```

- *Type:* string

---

##### `provenanceHeaderEnabled`<sup>Required</sup> <a name="provenanceHeaderEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.provenanceHeaderEnabled"></a>

```typescript
public readonly provenanceHeaderEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `renameTopicEnabled`<sup>Required</sup> <a name="renameTopicEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.renameTopicEnabled"></a>

```typescript
public readonly renameTopicEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicationFactor`<sup>Required</sup> <a name="replicationFactor" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.replicationFactor"></a>

```typescript
public readonly replicationFactor: number;
```

- *Type:* number

---

##### `saslMechanism`<sup>Required</sup> <a name="saslMechanism" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.saslMechanism"></a>

```typescript
public readonly saslMechanism: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `syncConsumerOffsetsEnabled`<sup>Required</sup> <a name="syncConsumerOffsetsEnabled" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.syncConsumerOffsetsEnabled"></a>

```typescript
public readonly syncConsumerOffsetsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `taskNum`<sup>Required</sup> <a name="taskNum" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.taskNum"></a>

```typescript
public readonly taskNum: number;
```

- *Type:* number

---

##### `topicsMapping`<sup>Required</sup> <a name="topicsMapping" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.topicsMapping"></a>

```typescript
public readonly topicsMapping: string[];
```

- *Type:* string[]

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTaskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DmsSmartConnectTaskV2SourceTask;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2SourceTask">DmsSmartConnectTaskV2SourceTask</a>

---


### DmsSmartConnectTaskV2TimeoutsOutputReference <a name="DmsSmartConnectTaskV2TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsSmartConnectTaskV2 } from '@cdktf/provider-opentelekomcloud'

new dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsSmartConnectTaskV2Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.dmsSmartConnectTaskV2.DmsSmartConnectTaskV2Timeouts">DmsSmartConnectTaskV2Timeouts</a>

---



