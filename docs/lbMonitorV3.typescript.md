# `opentelekomcloud_lb_monitor_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_monitor_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3).

# `lbMonitorV3` Submodule <a name="`lbMonitorV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbMonitorV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMonitorV3 <a name="LbMonitorV3" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3 opentelekomcloud_lb_monitor_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer"></a>

```typescript
import { lbMonitorV3 } from '@cdktf/provider-opentelekomcloud'

new lbMonitorV3.LbMonitorV3(scope: Construct, id: string, config: LbMonitorV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp">resetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes">resetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod">resetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown">resetMaxRetriesDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort">resetMonitorPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath">resetUrlPath</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAdminStateUp` <a name="resetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp"></a>

```typescript
public resetAdminStateUp(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetExpectedCodes` <a name="resetExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes"></a>

```typescript
public resetExpectedCodes(): void
```

##### `resetHttpMethod` <a name="resetHttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod"></a>

```typescript
public resetHttpMethod(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxRetriesDown` <a name="resetMaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown"></a>

```typescript
public resetMaxRetriesDown(): void
```

##### `resetMonitorPort` <a name="resetMonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort"></a>

```typescript
public resetMonitorPort(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetUrlPath` <a name="resetUrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath"></a>

```typescript
public resetUrlPath(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct"></a>

```typescript
import { lbMonitorV3 } from '@cdktf/provider-opentelekomcloud'

lbMonitorV3.LbMonitorV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement"></a>

```typescript
import { lbMonitorV3 } from '@cdktf/provider-opentelekomcloud'

lbMonitorV3.LbMonitorV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource"></a>

```typescript
import { lbMonitorV3 } from '@cdktf/provider-opentelekomcloud'

lbMonitorV3.LbMonitorV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput">adminStateUpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput">delayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput">expectedCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput">httpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput">maxRetriesDownInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput">monitorPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput">poolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput">urlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay">delay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod">httpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown">maxRetriesDown</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort">monitorPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath">urlPath</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `adminStateUpInput`<sup>Optional</sup> <a name="adminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput"></a>

```typescript
public readonly adminStateUpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delayInput`<sup>Optional</sup> <a name="delayInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput"></a>

```typescript
public readonly delayInput: number;
```

- *Type:* number

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `expectedCodesInput`<sup>Optional</sup> <a name="expectedCodesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput"></a>

```typescript
public readonly expectedCodesInput: string;
```

- *Type:* string

---

##### `httpMethodInput`<sup>Optional</sup> <a name="httpMethodInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput"></a>

```typescript
public readonly httpMethodInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxRetriesDownInput`<sup>Optional</sup> <a name="maxRetriesDownInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput"></a>

```typescript
public readonly maxRetriesDownInput: number;
```

- *Type:* number

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `monitorPortInput`<sup>Optional</sup> <a name="monitorPortInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput"></a>

```typescript
public readonly monitorPortInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `poolIdInput`<sup>Optional</sup> <a name="poolIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput"></a>

```typescript
public readonly poolIdInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlPathInput`<sup>Optional</sup> <a name="urlPathInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput"></a>

```typescript
public readonly urlPathInput: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `expectedCodes`<sup>Required</sup> <a name="expectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

---

##### `httpMethod`<sup>Required</sup> <a name="httpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `maxRetriesDown`<sup>Required</sup> <a name="maxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown"></a>

```typescript
public readonly maxRetriesDown: number;
```

- *Type:* number

---

##### `monitorPort`<sup>Required</sup> <a name="monitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort"></a>

```typescript
public readonly monitorPort: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `urlPath`<sup>Required</sup> <a name="urlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbMonitorV3Config <a name="LbMonitorV3Config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.Initializer"></a>

```typescript
import { lbMonitorV3 } from '@cdktf/provider-opentelekomcloud'

const lbMonitorV3Config: lbMonitorV3.LbMonitorV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay">delay</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#delay LbMonitorV3#delay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries">maxRetries</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#max_retries LbMonitorV3#max_retries}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId">poolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#pool_id LbMonitorV3#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#timeout LbMonitorV3#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#type LbMonitorV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp">adminStateUp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#domain_name LbMonitorV3#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes">expectedCodes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod">httpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#http_method LbMonitorV3#http_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#id LbMonitorV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown">maxRetriesDown</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort">monitorPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#name LbMonitorV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#project_id LbMonitorV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath">urlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#url_path LbMonitorV3#url_path}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `delay`<sup>Required</sup> <a name="delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay"></a>

```typescript
public readonly delay: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#delay LbMonitorV3#delay}.

---

##### `maxRetries`<sup>Required</sup> <a name="maxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#max_retries LbMonitorV3#max_retries}.

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#pool_id LbMonitorV3#pool_id}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#timeout LbMonitorV3#timeout}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#type LbMonitorV3#type}.

---

##### `adminStateUp`<sup>Optional</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#domain_name LbMonitorV3#domain_name}.

---

##### `expectedCodes`<sup>Optional</sup> <a name="expectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes"></a>

```typescript
public readonly expectedCodes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}.

---

##### `httpMethod`<sup>Optional</sup> <a name="httpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod"></a>

```typescript
public readonly httpMethod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#http_method LbMonitorV3#http_method}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#id LbMonitorV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxRetriesDown`<sup>Optional</sup> <a name="maxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown"></a>

```typescript
public readonly maxRetriesDown: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}.

---

##### `monitorPort`<sup>Optional</sup> <a name="monitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort"></a>

```typescript
public readonly monitorPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#name LbMonitorV3#name}.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#project_id LbMonitorV3#project_id}.

---

##### `urlPath`<sup>Optional</sup> <a name="urlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath"></a>

```typescript
public readonly urlPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.2/docs/resources/lb_monitor_v3#url_path LbMonitorV3#url_path}.

---



