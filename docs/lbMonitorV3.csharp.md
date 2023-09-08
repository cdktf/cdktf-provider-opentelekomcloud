# `opentelekomcloud_lb_monitor_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_lb_monitor_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3).

# `lbMonitorV3` Submodule <a name="`lbMonitorV3` Submodule" id="@cdktf/provider-opentelekomcloud.lbMonitorV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbMonitorV3 <a name="LbMonitorV3" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3 opentelekomcloud_lb_monitor_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbMonitorV3(Construct Scope, string Id, LbMonitorV3Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config">LbMonitorV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes">ResetExpectedCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown">ResetMaxRetriesDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort">ResetMonitorPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath">ResetUrlPath</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetAdminStateUp"></a>

```csharp
private void ResetAdminStateUp()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetDomainName"></a>

```csharp
private void ResetDomainName()
```

##### `ResetExpectedCodes` <a name="ResetExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetExpectedCodes"></a>

```csharp
private void ResetExpectedCodes()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxRetriesDown` <a name="ResetMaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMaxRetriesDown"></a>

```csharp
private void ResetMaxRetriesDown()
```

##### `ResetMonitorPort` <a name="ResetMonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetMonitorPort"></a>

```csharp
private void ResetMonitorPort()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetProjectId"></a>

```csharp
private void ResetProjectId()
```

##### `ResetUrlPath` <a name="ResetUrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.resetUrlPath"></a>

```csharp
private void ResetUrlPath()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbMonitorV3.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbMonitorV3.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

LbMonitorV3.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput">DelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput">DomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput">ExpectedCodesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput">MaxRetriesDownInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput">MonitorPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput">PoolIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput">ProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput">UrlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay">Delay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName">DomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes">ExpectedCodes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown">MaxRetriesDown</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort">MonitorPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId">PoolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath">UrlPath</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUpInput"></a>

```csharp
public object AdminStateUpInput { get; }
```

- *Type:* object

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delayInput"></a>

```csharp
public double DelayInput { get; }
```

- *Type:* double

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainNameInput"></a>

```csharp
public string DomainNameInput { get; }
```

- *Type:* string

---

##### `ExpectedCodesInput`<sup>Optional</sup> <a name="ExpectedCodesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodesInput"></a>

```csharp
public string ExpectedCodesInput { get; }
```

- *Type:* string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxRetriesDownInput`<sup>Optional</sup> <a name="MaxRetriesDownInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDownInput"></a>

```csharp
public double MaxRetriesDownInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MonitorPortInput`<sup>Optional</sup> <a name="MonitorPortInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPortInput"></a>

```csharp
public double MonitorPortInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PoolIdInput`<sup>Optional</sup> <a name="PoolIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolIdInput"></a>

```csharp
public string PoolIdInput { get; }
```

- *Type:* string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectIdInput"></a>

```csharp
public string ProjectIdInput { get; }
```

- *Type:* string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UrlPathInput`<sup>Optional</sup> <a name="UrlPathInput" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPathInput"></a>

```csharp
public string UrlPathInput { get; }
```

- *Type:* string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; }
```

- *Type:* object

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.delay"></a>

```csharp
public double Delay { get; }
```

- *Type:* double

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.domainName"></a>

```csharp
public string DomainName { get; }
```

- *Type:* string

---

##### `ExpectedCodes`<sup>Required</sup> <a name="ExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.expectedCodes"></a>

```csharp
public string ExpectedCodes { get; }
```

- *Type:* string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MaxRetriesDown`<sup>Required</sup> <a name="MaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.maxRetriesDown"></a>

```csharp
public double MaxRetriesDown { get; }
```

- *Type:* double

---

##### `MonitorPort`<sup>Required</sup> <a name="MonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.monitorPort"></a>

```csharp
public double MonitorPort { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.poolId"></a>

```csharp
public string PoolId { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UrlPath`<sup>Required</sup> <a name="UrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.urlPath"></a>

```csharp
public string UrlPath { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbMonitorV3Config <a name="LbMonitorV3Config" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new LbMonitorV3Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double Delay,
    double MaxRetries,
    string PoolId,
    double Timeout,
    string Type,
    object AdminStateUp = null,
    string DomainName = null,
    string ExpectedCodes = null,
    string HttpMethod = null,
    string Id = null,
    double MaxRetriesDown = null,
    double MonitorPort = null,
    string Name = null,
    string ProjectId = null,
    string UrlPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay">Delay</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#delay LbMonitorV3#delay}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#max_retries LbMonitorV3#max_retries}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId">PoolId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#pool_id LbMonitorV3#pool_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout">Timeout</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#timeout LbMonitorV3#timeout}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#type LbMonitorV3#type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp">AdminStateUp</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName">DomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#domain_name LbMonitorV3#domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes">ExpectedCodes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod">HttpMethod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#http_method LbMonitorV3#http_method}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#id LbMonitorV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown">MaxRetriesDown</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort">MonitorPort</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#name LbMonitorV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId">ProjectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#project_id LbMonitorV3#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath">UrlPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#url_path LbMonitorV3#url_path}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.delay"></a>

```csharp
public double Delay { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#delay LbMonitorV3#delay}.

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#max_retries LbMonitorV3#max_retries}.

---

##### `PoolId`<sup>Required</sup> <a name="PoolId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.poolId"></a>

```csharp
public string PoolId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#pool_id LbMonitorV3#pool_id}.

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#timeout LbMonitorV3#timeout}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#type LbMonitorV3#type}.

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.adminStateUp"></a>

```csharp
public object AdminStateUp { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#admin_state_up LbMonitorV3#admin_state_up}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.domainName"></a>

```csharp
public string DomainName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#domain_name LbMonitorV3#domain_name}.

---

##### `ExpectedCodes`<sup>Optional</sup> <a name="ExpectedCodes" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.expectedCodes"></a>

```csharp
public string ExpectedCodes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#expected_codes LbMonitorV3#expected_codes}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#http_method LbMonitorV3#http_method}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#id LbMonitorV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxRetriesDown`<sup>Optional</sup> <a name="MaxRetriesDown" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.maxRetriesDown"></a>

```csharp
public double MaxRetriesDown { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#max_retries_down LbMonitorV3#max_retries_down}.

---

##### `MonitorPort`<sup>Optional</sup> <a name="MonitorPort" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.monitorPort"></a>

```csharp
public double MonitorPort { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#monitor_port LbMonitorV3#monitor_port}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#name LbMonitorV3#name}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.projectId"></a>

```csharp
public string ProjectId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#project_id LbMonitorV3#project_id}.

---

##### `UrlPath`<sup>Optional</sup> <a name="UrlPath" id="@cdktf/provider-opentelekomcloud.lbMonitorV3.LbMonitorV3Config.property.urlPath"></a>

```csharp
public string UrlPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/lb_monitor_v3#url_path LbMonitorV3#url_path}.

---



