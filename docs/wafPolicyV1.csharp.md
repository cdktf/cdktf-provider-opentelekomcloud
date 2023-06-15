# `opentelekomcloud_waf_policy_v1`

Refer to the Terraform Registory for docs: [`opentelekomcloud_waf_policy_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1).

# `wafPolicyV1` Submodule <a name="`wafPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.wafPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WafPolicyV1 <a name="WafPolicyV1" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1 opentelekomcloud_waf_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1(Construct Scope, string Id, WafPolicyV1Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config">WafPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection">ResetFullDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts">ResetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel">ResetLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions">ResetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutAction` <a name="PutAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction"></a>

```csharp
private void PutAction(WafPolicyV1Action Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions"></a>

```csharp
private void PutOptions(WafPolicyV1Options Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts"></a>

```csharp
private void PutTimeouts(WafPolicyV1Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetAction"></a>

```csharp
private void ResetAction()
```

##### `ResetFullDetection` <a name="ResetFullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetFullDetection"></a>

```csharp
private void ResetFullDetection()
```

##### `ResetHosts` <a name="ResetHosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetHosts"></a>

```csharp
private void ResetHosts()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLevel` <a name="ResetLevel" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetLevel"></a>

```csharp
private void ResetLevel()
```

##### `ResetOptions` <a name="ResetOptions" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetOptions"></a>

```csharp
private void ResetOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPolicyV1.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPolicyV1.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

WafPolicyV1.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput">FullDetectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput">HostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput">LevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection">FullDetection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts">Hosts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level">Level</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.action"></a>

```csharp
public WafPolicyV1ActionOutputReference Action { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference">WafPolicyV1ActionOutputReference</a>

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.options"></a>

```csharp
public WafPolicyV1OptionsOutputReference Options { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference">WafPolicyV1OptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeouts"></a>

```csharp
public WafPolicyV1TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference">WafPolicyV1TimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.actionInput"></a>

```csharp
public WafPolicyV1Action ActionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---

##### `FullDetectionInput`<sup>Optional</sup> <a name="FullDetectionInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetectionInput"></a>

```csharp
public object FullDetectionInput { get; }
```

- *Type:* object

---

##### `HostsInput`<sup>Optional</sup> <a name="HostsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hostsInput"></a>

```csharp
public string[] HostsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LevelInput`<sup>Optional</sup> <a name="LevelInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.levelInput"></a>

```csharp
public double LevelInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.optionsInput"></a>

```csharp
public WafPolicyV1Options OptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `FullDetection`<sup>Required</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.fullDetection"></a>

```csharp
public object FullDetection { get; }
```

- *Type:* object

---

##### `Hosts`<sup>Required</sup> <a name="Hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.hosts"></a>

```csharp
public string[] Hosts { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Level`<sup>Required</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.level"></a>

```csharp
public double Level { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WafPolicyV1Action <a name="WafPolicyV1Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1Action {
    string Category
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category">Category</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#category WafPolicyV1#category}. |

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action.property.category"></a>

```csharp
public string Category { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#category WafPolicyV1#category}.

---

### WafPolicyV1Config <a name="WafPolicyV1Config" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    WafPolicyV1Action Action = null,
    object FullDetection = null,
    string[] Hosts = null,
    string Id = null,
    double Level = null,
    WafPolicyV1Options Options = null,
    WafPolicyV1Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#name WafPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action">Action</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | action block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection">FullDetection</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts">Hosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#id WafPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level">Level</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#level WafPolicyV1#level}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options">Options</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | options block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#name WafPolicyV1#name}.

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.action"></a>

```csharp
public WafPolicyV1Action Action { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#action WafPolicyV1#action}

---

##### `FullDetection`<sup>Optional</sup> <a name="FullDetection" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.fullDetection"></a>

```csharp
public object FullDetection { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#full_detection WafPolicyV1#full_detection}.

---

##### `Hosts`<sup>Optional</sup> <a name="Hosts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.hosts"></a>

```csharp
public string[] Hosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#hosts WafPolicyV1#hosts}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#id WafPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Level`<sup>Optional</sup> <a name="Level" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.level"></a>

```csharp
public double Level { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#level WafPolicyV1#level}.

---

##### `Options`<sup>Optional</sup> <a name="Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.options"></a>

```csharp
public WafPolicyV1Options Options { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#options WafPolicyV1#options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Config.property.timeouts"></a>

```csharp
public WafPolicyV1Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts">WafPolicyV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#timeouts WafPolicyV1#timeouts}

---

### WafPolicyV1Options <a name="WafPolicyV1Options" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1Options {
    object Antitamper = null,
    object Cc = null,
    object Common = null,
    object Crawler = null,
    object CrawlerEngine = null,
    object CrawlerOther = null,
    object CrawlerScanner = null,
    object CrawlerScript = null,
    object Custom = null,
    object Ignore = null,
    object Privacy = null,
    object Webattack = null,
    object Webshell = null,
    object Whiteblackip = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper">Antitamper</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc">Cc</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common">Common</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#common WafPolicyV1#common}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler">Crawler</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine">CrawlerEngine</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther">CrawlerOther</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner">CrawlerScanner</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript">CrawlerScript</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom">Custom</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore">Ignore</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy">Privacy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack">Webattack</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell">Webshell</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip">Whiteblackip</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}. |

---

##### `Antitamper`<sup>Optional</sup> <a name="Antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.antitamper"></a>

```csharp
public object Antitamper { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#antitamper WafPolicyV1#antitamper}.

---

##### `Cc`<sup>Optional</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.cc"></a>

```csharp
public object Cc { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#cc WafPolicyV1#cc}.

---

##### `Common`<sup>Optional</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.common"></a>

```csharp
public object Common { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#common WafPolicyV1#common}.

---

##### `Crawler`<sup>Optional</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawler"></a>

```csharp
public object Crawler { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler WafPolicyV1#crawler}.

---

##### `CrawlerEngine`<sup>Optional</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerEngine"></a>

```csharp
public object CrawlerEngine { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_engine WafPolicyV1#crawler_engine}.

---

##### `CrawlerOther`<sup>Optional</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerOther"></a>

```csharp
public object CrawlerOther { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_other WafPolicyV1#crawler_other}.

---

##### `CrawlerScanner`<sup>Optional</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScanner"></a>

```csharp
public object CrawlerScanner { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_scanner WafPolicyV1#crawler_scanner}.

---

##### `CrawlerScript`<sup>Optional</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.crawlerScript"></a>

```csharp
public object CrawlerScript { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#crawler_script WafPolicyV1#crawler_script}.

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.custom"></a>

```csharp
public object Custom { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#custom WafPolicyV1#custom}.

---

##### `Ignore`<sup>Optional</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.ignore"></a>

```csharp
public object Ignore { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#ignore WafPolicyV1#ignore}.

---

##### `Privacy`<sup>Optional</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.privacy"></a>

```csharp
public object Privacy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#privacy WafPolicyV1#privacy}.

---

##### `Webattack`<sup>Optional</sup> <a name="Webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webattack"></a>

```csharp
public object Webattack { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#webattack WafPolicyV1#webattack}.

---

##### `Webshell`<sup>Optional</sup> <a name="Webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.webshell"></a>

```csharp
public object Webshell { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#webshell WafPolicyV1#webshell}.

---

##### `Whiteblackip`<sup>Optional</sup> <a name="Whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options.property.whiteblackip"></a>

```csharp
public object Whiteblackip { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#whiteblackip WafPolicyV1#whiteblackip}.

---

### WafPolicyV1Timeouts <a name="WafPolicyV1Timeouts" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1Timeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#create WafPolicyV1#create}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#create WafPolicyV1#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.1/docs/resources/waf_policy_v1#delete WafPolicyV1#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### WafPolicyV1ActionOutputReference <a name="WafPolicyV1ActionOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1ActionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput">CategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.categoryInput"></a>

```csharp
public string CategoryInput { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1ActionOutputReference.property.internalValue"></a>

```csharp
public WafPolicyV1Action InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Action">WafPolicyV1Action</a>

---


### WafPolicyV1OptionsOutputReference <a name="WafPolicyV1OptionsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1OptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper">ResetAntitamper</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc">ResetCc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon">ResetCommon</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler">ResetCrawler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine">ResetCrawlerEngine</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther">ResetCrawlerOther</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner">ResetCrawlerScanner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript">ResetCrawlerScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore">ResetIgnore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy">ResetPrivacy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack">ResetWebattack</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell">ResetWebshell</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip">ResetWhiteblackip</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAntitamper` <a name="ResetAntitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetAntitamper"></a>

```csharp
private void ResetAntitamper()
```

##### `ResetCc` <a name="ResetCc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCc"></a>

```csharp
private void ResetCc()
```

##### `ResetCommon` <a name="ResetCommon" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCommon"></a>

```csharp
private void ResetCommon()
```

##### `ResetCrawler` <a name="ResetCrawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawler"></a>

```csharp
private void ResetCrawler()
```

##### `ResetCrawlerEngine` <a name="ResetCrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerEngine"></a>

```csharp
private void ResetCrawlerEngine()
```

##### `ResetCrawlerOther` <a name="ResetCrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerOther"></a>

```csharp
private void ResetCrawlerOther()
```

##### `ResetCrawlerScanner` <a name="ResetCrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScanner"></a>

```csharp
private void ResetCrawlerScanner()
```

##### `ResetCrawlerScript` <a name="ResetCrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCrawlerScript"></a>

```csharp
private void ResetCrawlerScript()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetCustom"></a>

```csharp
private void ResetCustom()
```

##### `ResetIgnore` <a name="ResetIgnore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetIgnore"></a>

```csharp
private void ResetIgnore()
```

##### `ResetPrivacy` <a name="ResetPrivacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetPrivacy"></a>

```csharp
private void ResetPrivacy()
```

##### `ResetWebattack` <a name="ResetWebattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebattack"></a>

```csharp
private void ResetWebattack()
```

##### `ResetWebshell` <a name="ResetWebshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWebshell"></a>

```csharp
private void ResetWebshell()
```

##### `ResetWhiteblackip` <a name="ResetWhiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.resetWhiteblackip"></a>

```csharp
private void ResetWhiteblackip()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput">AntitamperInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput">CcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput">CommonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput">CrawlerEngineInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput">CrawlerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput">CrawlerOtherInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput">CrawlerScannerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput">CrawlerScriptInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput">CustomInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput">IgnoreInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput">WebattackInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput">WebshellInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput">WhiteblackipInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper">Antitamper</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc">Cc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common">Common</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler">Crawler</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine">CrawlerEngine</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther">CrawlerOther</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner">CrawlerScanner</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript">CrawlerScript</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom">Custom</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore">Ignore</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy">Privacy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack">Webattack</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell">Webshell</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip">Whiteblackip</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AntitamperInput`<sup>Optional</sup> <a name="AntitamperInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamperInput"></a>

```csharp
public object AntitamperInput { get; }
```

- *Type:* object

---

##### `CcInput`<sup>Optional</sup> <a name="CcInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ccInput"></a>

```csharp
public object CcInput { get; }
```

- *Type:* object

---

##### `CommonInput`<sup>Optional</sup> <a name="CommonInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.commonInput"></a>

```csharp
public object CommonInput { get; }
```

- *Type:* object

---

##### `CrawlerEngineInput`<sup>Optional</sup> <a name="CrawlerEngineInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngineInput"></a>

```csharp
public object CrawlerEngineInput { get; }
```

- *Type:* object

---

##### `CrawlerInput`<sup>Optional</sup> <a name="CrawlerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerInput"></a>

```csharp
public object CrawlerInput { get; }
```

- *Type:* object

---

##### `CrawlerOtherInput`<sup>Optional</sup> <a name="CrawlerOtherInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOtherInput"></a>

```csharp
public object CrawlerOtherInput { get; }
```

- *Type:* object

---

##### `CrawlerScannerInput`<sup>Optional</sup> <a name="CrawlerScannerInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScannerInput"></a>

```csharp
public object CrawlerScannerInput { get; }
```

- *Type:* object

---

##### `CrawlerScriptInput`<sup>Optional</sup> <a name="CrawlerScriptInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScriptInput"></a>

```csharp
public object CrawlerScriptInput { get; }
```

- *Type:* object

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.customInput"></a>

```csharp
public object CustomInput { get; }
```

- *Type:* object

---

##### `IgnoreInput`<sup>Optional</sup> <a name="IgnoreInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignoreInput"></a>

```csharp
public object IgnoreInput { get; }
```

- *Type:* object

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacyInput"></a>

```csharp
public object PrivacyInput { get; }
```

- *Type:* object

---

##### `WebattackInput`<sup>Optional</sup> <a name="WebattackInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattackInput"></a>

```csharp
public object WebattackInput { get; }
```

- *Type:* object

---

##### `WebshellInput`<sup>Optional</sup> <a name="WebshellInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshellInput"></a>

```csharp
public object WebshellInput { get; }
```

- *Type:* object

---

##### `WhiteblackipInput`<sup>Optional</sup> <a name="WhiteblackipInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackipInput"></a>

```csharp
public object WhiteblackipInput { get; }
```

- *Type:* object

---

##### `Antitamper`<sup>Required</sup> <a name="Antitamper" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.antitamper"></a>

```csharp
public object Antitamper { get; }
```

- *Type:* object

---

##### `Cc`<sup>Required</sup> <a name="Cc" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.cc"></a>

```csharp
public object Cc { get; }
```

- *Type:* object

---

##### `Common`<sup>Required</sup> <a name="Common" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.common"></a>

```csharp
public object Common { get; }
```

- *Type:* object

---

##### `Crawler`<sup>Required</sup> <a name="Crawler" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawler"></a>

```csharp
public object Crawler { get; }
```

- *Type:* object

---

##### `CrawlerEngine`<sup>Required</sup> <a name="CrawlerEngine" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerEngine"></a>

```csharp
public object CrawlerEngine { get; }
```

- *Type:* object

---

##### `CrawlerOther`<sup>Required</sup> <a name="CrawlerOther" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerOther"></a>

```csharp
public object CrawlerOther { get; }
```

- *Type:* object

---

##### `CrawlerScanner`<sup>Required</sup> <a name="CrawlerScanner" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScanner"></a>

```csharp
public object CrawlerScanner { get; }
```

- *Type:* object

---

##### `CrawlerScript`<sup>Required</sup> <a name="CrawlerScript" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.crawlerScript"></a>

```csharp
public object CrawlerScript { get; }
```

- *Type:* object

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.custom"></a>

```csharp
public object Custom { get; }
```

- *Type:* object

---

##### `Ignore`<sup>Required</sup> <a name="Ignore" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.ignore"></a>

```csharp
public object Ignore { get; }
```

- *Type:* object

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.privacy"></a>

```csharp
public object Privacy { get; }
```

- *Type:* object

---

##### `Webattack`<sup>Required</sup> <a name="Webattack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webattack"></a>

```csharp
public object Webattack { get; }
```

- *Type:* object

---

##### `Webshell`<sup>Required</sup> <a name="Webshell" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.webshell"></a>

```csharp
public object Webshell { get; }
```

- *Type:* object

---

##### `Whiteblackip`<sup>Required</sup> <a name="Whiteblackip" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.whiteblackip"></a>

```csharp
public object Whiteblackip { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1OptionsOutputReference.property.internalValue"></a>

```csharp
public WafPolicyV1Options InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1Options">WafPolicyV1Options</a>

---


### WafPolicyV1TimeoutsOutputReference <a name="WafPolicyV1TimeoutsOutputReference" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opentelekomcloud;

new WafPolicyV1TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.wafPolicyV1.WafPolicyV1TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



