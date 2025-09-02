# `cfwDomainNameGroupV1` Submodule <a name="`cfwDomainNameGroupV1` Submodule" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CfwDomainNameGroupV1 <a name="CfwDomainNameGroupV1" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1 opentelekomcloud_cfw_domain_name_group_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1(scope: Construct, id: string, config: CfwDomainNameGroupV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config">CfwDomainNameGroupV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config">CfwDomainNameGroupV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames">putDomainNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType">resetDomainSetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDomainNames` <a name="putDomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames"></a>

```typescript
public putDomainNames(value: IResolvable | CfwDomainNameGroupV1DomainNames[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putDomainNames.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts"></a>

```typescript
public putTimeouts(value: CfwDomainNameGroupV1Timeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainSetType` <a name="resetDomainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetDomainSetType"></a>

```typescript
public resetDomainSetType(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CfwDomainNameGroupV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CfwDomainNameGroupV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CfwDomainNameGroupV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CfwDomainNameGroupV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus">configStatus</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames">domainNames</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount">refCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput">domainNamesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput">domainSetTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput">firewallIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput">objectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType">domainSetType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId">firewallId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId">objectId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `configStatus`<sup>Required</sup> <a name="configStatus" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.configStatus"></a>

```typescript
public readonly configStatus: number;
```

- *Type:* number

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNames"></a>

```typescript
public readonly domainNames: CfwDomainNameGroupV1DomainNamesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList">CfwDomainNameGroupV1DomainNamesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `refCount`<sup>Required</sup> <a name="refCount" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.refCount"></a>

```typescript
public readonly refCount: number;
```

- *Type:* number

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.rules"></a>

```typescript
public readonly rules: CfwDomainNameGroupV1RulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList">CfwDomainNameGroupV1RulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeouts"></a>

```typescript
public readonly timeouts: CfwDomainNameGroupV1TimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference">CfwDomainNameGroupV1TimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNamesInput`<sup>Optional</sup> <a name="domainNamesInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainNamesInput"></a>

```typescript
public readonly domainNamesInput: IResolvable | CfwDomainNameGroupV1DomainNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]

---

##### `domainSetTypeInput`<sup>Optional</sup> <a name="domainSetTypeInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetTypeInput"></a>

```typescript
public readonly domainSetTypeInput: number;
```

- *Type:* number

---

##### `firewallIdInput`<sup>Optional</sup> <a name="firewallIdInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallIdInput"></a>

```typescript
public readonly firewallIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectIdInput"></a>

```typescript
public readonly objectIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CfwDomainNameGroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainSetType`<sup>Required</sup> <a name="domainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.domainSetType"></a>

```typescript
public readonly domainSetType: number;
```

- *Type:* number

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CfwDomainNameGroupV1Config <a name="CfwDomainNameGroupV1Config" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

const cfwDomainNameGroupV1Config: cfwDomainNameGroupV1.CfwDomainNameGroupV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames">domainNames</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]</code> | domain_names block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId">firewallId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId">objectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType">domainSetType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainNames"></a>

```typescript
public readonly domainNames: IResolvable | CfwDomainNameGroupV1DomainNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]

domain_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#domain_names CfwDomainNameGroupV1#domain_names}

---

##### `firewallId`<sup>Required</sup> <a name="firewallId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.firewallId"></a>

```typescript
public readonly firewallId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#firewall_id CfwDomainNameGroupV1#firewall_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#name CfwDomainNameGroupV1#name}.

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.objectId"></a>

```typescript
public readonly objectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#object_id CfwDomainNameGroupV1#object_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

##### `domainSetType`<sup>Optional</sup> <a name="domainSetType" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.domainSetType"></a>

```typescript
public readonly domainSetType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#domain_set_type CfwDomainNameGroupV1#domain_set_type}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Config.property.timeouts"></a>

```typescript
public readonly timeouts: CfwDomainNameGroupV1Timeouts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#timeouts CfwDomainNameGroupV1#timeouts}

---

### CfwDomainNameGroupV1DomainNames <a name="CfwDomainNameGroupV1DomainNames" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

const cfwDomainNameGroupV1DomainNames: cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}. |

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#domain_name CfwDomainNameGroupV1#domain_name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#description CfwDomainNameGroupV1#description}.

---

### CfwDomainNameGroupV1Rules <a name="CfwDomainNameGroupV1Rules" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

const cfwDomainNameGroupV1Rules: cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules = { ... }
```


### CfwDomainNameGroupV1Timeouts <a name="CfwDomainNameGroupV1Timeouts" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

const cfwDomainNameGroupV1Timeouts: cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#create CfwDomainNameGroupV1#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#delete CfwDomainNameGroupV1#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.46/docs/resources/cfw_domain_name_group_v1#update CfwDomainNameGroupV1#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CfwDomainNameGroupV1DomainNamesList <a name="CfwDomainNameGroupV1DomainNamesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get"></a>

```typescript
public get(index: number): CfwDomainNameGroupV1DomainNamesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwDomainNameGroupV1DomainNames[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>[]

---


### CfwDomainNameGroupV1DomainNamesOutputReference <a name="CfwDomainNameGroupV1DomainNamesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId">domainAddressId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainAddressId`<sup>Required</sup> <a name="domainAddressId" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainAddressId"></a>

```typescript
public readonly domainAddressId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNamesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwDomainNameGroupV1DomainNames;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1DomainNames">CfwDomainNameGroupV1DomainNames</a>

---


### CfwDomainNameGroupV1RulesList <a name="CfwDomainNameGroupV1RulesList" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get"></a>

```typescript
public get(index: number): CfwDomainNameGroupV1RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CfwDomainNameGroupV1RulesOutputReference <a name="CfwDomainNameGroupV1RulesOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1RulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CfwDomainNameGroupV1Rules;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Rules">CfwDomainNameGroupV1Rules</a>

---


### CfwDomainNameGroupV1TimeoutsOutputReference <a name="CfwDomainNameGroupV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer"></a>

```typescript
import { cfwDomainNameGroupV1 } from '@cdktf/provider-opentelekomcloud'

new cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1TimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CfwDomainNameGroupV1Timeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opentelekomcloud.cfwDomainNameGroupV1.CfwDomainNameGroupV1Timeouts">CfwDomainNameGroupV1Timeouts</a>

---



